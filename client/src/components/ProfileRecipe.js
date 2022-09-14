import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../context/UserProvider'
function ProfileRecipe(props) {
  const { user, userAxios, setUserState, userState, setAllRecipes , meals,} = React.useContext(UserContext)
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { favorite, _id } = props
    
  const newArr= []
  newArr.push(
    props.favorite.strIngredient1,
    props.favorite.strIngredient2,
    props.favorite.strIngredient3,
    props.favorite.strIngredient4,
    props.favorite.strIngredient5,
    props.favorite.strIngredient6,
    props.favorite.strIngredient7,
    props.favorite.strIngredient8,
    props.favorite.strIngredient9,
    props.favorite.strIngredient10,
    props.favorite.strIngredient11,
    props.favorite.strIngredient12,
    props.favorite.strIngredient13,
    props.favorite.strIngredient14,
    props.favorite.strIngredient15,
    props.favorite.strIngredient16 
    ) 
    
  // const id = recipe.map(ig =>{
  //   return ig._id
  //   })
  function handleDeleteFav() {
    userAxios.delete(`/api/recipe/${props.favorite._id}`)
      .then(res => {
        console.log(props.favorite._id)
        setUserState(userState => {
          const filtered = userState.recipe.filter(recipes => recipes.idMeal !== _id ? recipes : null)
          return {
            ...userState,
            recipe: filtered
          }
        })})
      .catch(err => err.response.data.message)
  }
  
  const ingreList = newArr.map(ingredient =>{
    if(ingredient == ''){
      return (
        <div></div>
      )
    }
    return(
      <li>{ingredient}</li>
    )
  })
  return (
    <div className="onw">
      <Button variant='primary' onClick={handleShow}>
        See More!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>This Meal Is {props.favorite.strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {ingreList}
          {props.favorite.strInstructions}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
</Button>
                <Button variant='danger' onClick={() =>handleDeleteFav(_id)}>Remove From Favorites</Button>
             
        </Modal.Footer>
      </Modal>
    
    </div>
  );
}
export default ProfileRecipe