import React from 'react'
import { UserContext } from '../context/UserProvider'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/favorite.css'
import ProfileRecipe from './ProfileRecipe'
function Favorite() {
  const { userState, user } = React.useContext(UserContext)

  return (
    <div>
      <h2 className='fav2'>Saved Recipes</h2>
      <div className="fav">
        {userState.recipe.length > 0 ? userState.recipe.map((favorite, index) => (
          <div className="meals" key={index}>
            <h1 className='meal'>{favorite.strMeal}</h1>
            <img src={favorite.strMealThumb} alt="" className='imgs' />
            <div className='p'> 
              <ProfileRecipe favorite ={favorite}/>
            </div>
      

          </div>
        )) : <div className='e1'>
          <h2>You havent saved any recipes</h2>
          <Link to="/public"><Button>Please Add Some</Button></Link>
        </div>}
      </div>
    </div>
  )
}

export default Favorite
