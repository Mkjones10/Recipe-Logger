import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../context/UserProvider'

function RecipeInst(props) {
  const meal = props
  const { user, userAxios, setUserState, userState, setAllRecipes } = React.useContext(UserContext)
  const [show, setShow] = useState(false);
  const { meals, _id } = React.useContext(UserContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleFavs() {
    userAxios.post('/api/recipe', props.meal)
      .then(res => {
        console.log(props.meal)
        setUserState(prevUserState => ({
          ...prevUserState,
          recipe: [...prevUserState.recipe, res.data]

        }))
      })
      .catch(err => console.log(err))
  }
  function handleDeleteFav(_id) {
    userAxios.delete(`/api/recipe/${userState.recipe._id}`, { userId: user._id })
      .then(res => setAllRecipes(prevRecipes => prevRecipes.filter(recipes => recipes._id !== _id ? recipes : res.data)))
      .catch(err => err.response.data.message)
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user && (
           
            userState.recipe.forEach((item, props) => { 
              (item.meal.idMeal === props.meal.idMeal ? (
              
                <Button variant='primary' onClick={handleFavs} >
                  Add To Favorites
                </Button>
              ) :
                (<Button variant="danger" onClick={handleDeleteFav}>Remove From Favorites</Button>) ) }))}
        </Modal.Footer>

      </Modal>
    </>
  );

}

export default RecipeInst