import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserContext } from '../context/UserProvider'
function ProfileRecipe(props) {
    const { user, userAxios, setUserState, userState, setAllRecipes } = React.useContext(UserContext)

    const recipe = userState.recipe
    console.log('recipe id', recipe.idMeal)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { favorite, _id } = props

    return (
        console.log(favorite),
        <div className="onw">
            <Button variant='primary' onClick={handleShow}>
                See More!
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>This Meal Is {props.favorite.strMeal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <li>{props.favorite.strIngredient1}</li>
                    <li>{props.favorite.strIngredient2}</li>
                    <li>{props.favorite.strIngredient3}</li>
                    <li>{props.favorite.strIngredient4}</li>
                    <li>{props.favorite.strIngredient5}</li>
                    <li>{props.favorite.strIngredient6}</li>
                    <li>{props.favorite.strIngredient7}</li>
                    <li>{props.favorite.strIngredient8}</li>
                    <li>{props.favorite.strIngredient9}</li>
                    <li>{props.favorite.strIngredient10}</li>
                    <li>{props.favorite.strIngredient11}</li>
                    <li>{props.favorite.strIngredient12}</li>
                    <li>{props.favorite.strIngredient13}</li>
                    <li>{props.favorite.strIngredient14}</li>
                    <li>{props.favorite.strIngredient15}</li>
                    <li>{props.favorite.strIngredient16}</li>
                    {props.favorite.strInstructions}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    );
}
export default ProfileRecipe