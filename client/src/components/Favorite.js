import React from 'react'
import { UserContext } from '../context/UserProvider'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/favorite.css'
function Favorite() {
    const {userState , user} = React.useContext(UserContext)
   
  return (
    console.log(user),
    <div>
      <h2>Saved Recipes</h2>
      <div className="fav">
      {userState.favorites.length > 0 ? user.favorites.map(favorite =>(
        <div className="meals"></div>
      )) : <div className='fave'>
        <h2>You havent saved any recipes</h2>
        <Link to="/public"><Button>Please Add Some</Button></Link>
      </div>}
      </div>
    </div>
  )
}

export default Favorite
