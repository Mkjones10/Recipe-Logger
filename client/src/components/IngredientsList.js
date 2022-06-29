import React from 'react'
import { UserContext } from '../context/UserProvider'

export default function IngredientsList(props){
    const {userState} = React.useContext(UserContext)

    const myIngredients = userState.ingredients.map((ingredients, i) =>{
        return (
            <div className="k" key={i}>
                <h1>{ingredients.name}</h1>
                <p>{ingredients.boughtAt}</p>
                <p>{ingredients.description}</p>
            </div>
        )
    })
    return(
        <>
            <div className="list">
                {myIngredients}
            </div>
        
        </>
    )
}