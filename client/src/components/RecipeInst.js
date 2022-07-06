import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../context/UserProvider'
import axios from 'axios'
function RecipeInst(props) {
  const meal = props
  const {user,  userAxios} = React.useContext(UserContext)
  const [show, setShow] = useState(false);
  const { meals } = React.useContext(UserContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleFavs(){
    userAxios.post('/api/recipe', props.meal.idMeal)
    .then( res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
          <Button onClick={handleClose} className='btn1'>
            Close
          </Button>
         {user && (
         <Button onClick={handleFavs} className='btn2'>
            Add To Favorites
          </Button>  )}
        </Modal.Footer>

      </Modal>
    </>
  );

}

export default RecipeInst