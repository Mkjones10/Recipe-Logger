import React from 'react'
import { UserContext } from '../context/UserProvider'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function IngredientsList(props) {
    const { userState, userAxios, _id, setAllIngredients, user } = React.useContext(UserContext)
    function handleDelete(ingrId){
        userAxios.delete(`/api/ingredients/${ingrId}`, {userId: user._id})
        .then(res =>{
            setAllIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient._id !== _id? ingredient:res.data))
        })
        .catch(err => console.log(err))
    }

    
    return (
        <>

            <div className="list">
               
                {userState.ingredients ? <>
                

                    {userState.ingredients.map((ingredients, i) => 

                        <div className="k" key={i}>
                            <div className="fled">
                            <h1>{ingredients.name}</h1>
                            <p>{ingredients.boughtAt}</p>
                            <h2>No idea what to cook?</h2>
                            <Link to="/public"><Button>Search our Recipes!</Button></Link>
                            
                            </div>
                           <Button onClick={() => handleDelete(ingredients._id)} variant='danger'> delete</Button>
                        </div>
                        

                    )}
                </> : null}

            </div>

        </>
    )
}