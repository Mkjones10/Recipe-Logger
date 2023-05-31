import React from 'react'
import { UserContext } from '../context/UserProvider'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function IngredientsList(props) {
    const { userState, userAxios, _id, setAllIngredients, user ,getUserIngredients} = React.useContext(UserContext)
    
    function handleDelete(recipeId){
        userAxios.delete(`/api/ingredients/${recipeId}`, {userId: user._id})
        .then(res =>{
            setAllIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient._id !== _id? ingredient:res.data))
            getUserIngredients()
        })
        .catch(err => console.log(err))
    }

    
    return (
        <>

            <div className="list">
               
                {userState.ingredients ? <>
                

                    {userState.ingredients.map((ingredients, i) => 

                        <div className="k1" key={i}>
                            <div className="fled">
                            <h1>{ingredients.name}</h1>
                            <p>{ingredients.boughtAt}</p>
                            <p className='text'>{ingredients.description}</p>
                            <p className='text'>{ingredients.imgurl}</p>
                           
                            
                            </div>
                           <Button onClick={() => handleDelete(ingredients._id)} variant='danger'> delete</Button>
                        </div>
                        

                    )}
                </> : null}

            </div>

        </>
    )
}