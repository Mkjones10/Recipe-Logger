import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../context/UserProvider'
function profileRecipe(props) {
  const { user, userAxios, setUserState, userState, setAllRecipes , meals,} = React.useContext(UserContext)
  const handleDeleteFavs = props
  
  return (
    <div className="onw">
      <Button variant='primary' onClick={handleShow}>
        See More!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>This Meal Is {props.meal.strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <li>{props.meal.strIngredient1}</li>
          <li>{props.meal.strIngredient2}</li>
          <li>{props.meal.strIngredient3}</li>
          <li>{props.meal.strIngredient4}</li>
          <li>{props.meal.strIngredient5}</li>
          <li>{props.meal.strIngredient6}</li>
          <li>{props.meal.strIngredient7}</li>
          <li>{props.meal.strIngredient8}</li>
          <li>{props.meal.strIngredient9}</li>
          <li>{props.meal.strIngredient10}</li>
          <li>{props.meal.strIngredient11}</li>
          <li>{props.meal.strIngredient12}</li>
          <li>{props.meal.strIngredient13}</li>
          <li>{props.meal.strIngredient14}</li>
          <li>{props.meal.strIngredient15}</li>
          <li>{props.meal.strIngredient16}</li>
          {props.meal.strInstructions}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
</Button>
                <Button variant='danger' onClick={() => props.handleDeleteFav(_id)}>Remove From Favorites</Button>
             
        </Modal.Footer>
      </Modal>
    
    </div>
  );
}
export default profileRectipe