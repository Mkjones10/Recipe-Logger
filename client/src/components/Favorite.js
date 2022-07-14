import React from 'react'
import { UserContext } from '../context/UserProvider'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/favorite.css'
function Favorite() {
  const { userState, user } = React.useContext(UserContext)

  return (
    console.log(userState),
    <div>
      <h2>Saved Recipes</h2>
      <div className="fav">
        {userState.recipe.length > 0 ? userState.recipe.map((favorite, index) => (
          <div className="meals" key={index}>
            <h1 className='meal'>{favorite.strMeal}</h1>
            <img src={favorite.strMealThumb} alt="" />
            <div className="ing">
              <ul>
                <li>{favorite.strIngredient1 ? favorite.strIngredient1 : null}</li>
                <li>{favorite.strIngredient2 ? favorite.strIngredient2 : null}</li>
                <li>{favorite.strIngredient3 ? favorite.strIngredient3 : null}</li>
                <li>{favorite.strIngredient4 ? favorite.strIngredient4 : null}</li>
                <li>{favorite.strIngredient5 ? favorite.strIngredient5 : null}</li>
                <li>{favorite.strIngredient6 ? favorite.strIngredient6 : null}</li>
                <li>{favorite.strIngredient7 ? favorite.strIngredient7 : null}</li>
                <li>{favorite.strIngredient8 ? favorite.strIngredient8 : null}</li>
                <li>{favorite.strIngredient9 ? favorite.strIngredient9 : null}</li>
                <li>{favorite.strIngredient10 ? favorite.strIngredient10 : null}</li>
                <li>{favorite.strIngredient11 ? favorite.strIngredient11 : null}</li>
                <li>{favorite.strIngredient12 ? favorite.strIngredient12 : null}</li>
                <li>{favorite.strIngredient13 ? favorite.strIngredient13 : null}</li>
                <li>{favorite.strIngredient14 ? favorite.strIngredient14 : null}</li>
                <li>{favorite.strIngredient15 ? favorite.strIngredient15 : null}</li>
                <li>{favorite.strIngredient16 ? favorite.strIngredient16 : null}</li>
              </ul>
            </div>
            <div className="des">
              {favorite.strInstructions}
            </div>


          </div>
        )) : <div className='fave'>
          <h2>You havent saved any recipes</h2>
          <Link to="/public"><Button>Please Add Some</Button></Link>
        </div>}
      </div>
    </div>
  )
}

export default Favorite
