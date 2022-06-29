import React from 'react'
import IngredientsForm from './IngredientsForm'
import IngredientsList from './IngredientsList'
import { UserContext } from '../context/UserProvider'
export default function Profile() {
    const { user: { username }, addIngredients, getUserIngredients } = React.useContext(UserContext)
   
    return (
        <div>
            <>
                <div className="profile">
                    <h1 className='wel'>
                        Welcome {username}
                    </h1>
                    <h2 className='add'> Add Ingredients</h2>
                    <IngredientsForm addIngredients ={addIngredients}/>
                    <div className="my">Ingredient List</div>
                    <div className="li">
                        <IngredientsList/>
                    </div>
                </div>
            </>

        </div>
    )
}


