import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../context/UserProvider'
function RecipeInst(props) {
  const { user, userAxios, setUserState, userState, setAllRecipes , meals, allRecipes} = React.useContext(UserContext)
  const [show, setShow] = useState(false);
  const {meal, _id} = props
  const recipe = userState.recipe
                        
  const ingredientArr= []
  ingredientArr.push(
    props.meal.strIngredient1,
    props.meal.strIngredient2,
    props.meal.strIngredient3,
    props.meal.strIngredient4,
    props.meal.strIngredient5,
    props.meal.strIngredient6,
    props.meal.strIngredient7,
    props.meal.strIngredient8,
    props.meal.strIngredient9,
    props.meal.strIngredient10,
    props.meal.strIngredient11,
    props.meal.strIngredient12,
    props.meal.strIngredient13,
    props.meal.strIngredient14,
    props.meal.strIngredient15,
    props.meal.strIngredient16 
    ) 
  // const id = recipe.map(ig =>{
  //   return ig._id
  //   })
  
  const ingreList = ingredientArr.map(ingredient =>{
    if(ingredient == ''){
      return (
        <div></div>
      )
    }
    return(
      <li>{ingredient}</li>
    )
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleFavs() {
    userAxios.post('/api/recipe', props.meal)
      .then(res => {
        setUserState(prevUserState => ({
          ...prevUserState,
          recipe: [...prevUserState.recipe, res.data]
        }))
      })
      .catch(err => console.log(err))
  }
  function handleDeleteFav() {
    userAxios.delete(`/api/recipe/${_id}`)
      .then(res => {
        setUserState(userState => {
          const filtered = userState.recipe.filter(recipes => recipes.idMeal !== _id ? recipes : null)
          return {
            ...userState,
            recipe: filtered
          }
        })})
      .catch(err => err.response.data.message)
  }
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        See More!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>This Meal Is {props.meal.strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ingreList}
          {props.meal.strInstructions}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          {
            userState.recipe.some(item => item.strMeal.includes(props.meal.strMeal) ) ?
                (<Button variant='danger' onClick={() =>  handleDeleteFav(recipe._idMeal)}>Remove From Favorites</Button>
              ) :
                ( <Button variant='primary' onClick={handleFavs} >
                Add To Favorites
              </Button> )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RecipeInst