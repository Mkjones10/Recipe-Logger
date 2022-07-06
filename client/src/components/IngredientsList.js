import React from 'react'
import { UserContext } from '../context/UserProvider'

export default function IngredientsList(props) {
    const { userState } = React.useContext(UserContext)

    // const myIngredients = userState.ingredients.map((ingredients, i) =>{
    //     return (
    //         <div className="k" key={i}>
    //             <h1>{ingredients.name}</h1>
    //             <p>{ingredients.boughtAt}</p>
    //             <p>{ingredients.description}</p>
    //         </div>
    //     )
    // })
    return (
        console.log(userState.ingredients[0]),
        <>

            <div className="list">
                {/* {myIngredients} */}
                {/* <h1>{userState.ingredients[0]}</h1> */}
                {userState.ingredients ? <>

                    {userState.ingredients.map((ingredients, i) => 

                        <div className="k" key={i}>
                            <h1>{ingredients.name}</h1>
                            <p>{ingredients.boughtAt}</p>
                            <p>{ingredients.description}</p>
                        </div>

                    )}
                </> : null}

            </div>

        </>
    )
}