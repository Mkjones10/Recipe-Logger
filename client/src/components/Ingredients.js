import React from 'react'
import { UserContext } from '../context/UserProvider'
import IngredientsForm from './IngredientsForm'

export default function Ingredients(props){
    const { name, boughtAt, description, user} = props
    const [editTog, setEditTog] = React.useState(false)
    const { userAxios, user:loggedInUser, setAllIngredients, } = React.useContext(UserContext)
    const newInputs = {
        name:'',
        boughtAt:'',
        description:''
    }
    const [editedInputs, setEditedInputs] = React.useState(newInputs)

    function handleDelete(){
        userAxios.delete(`/api/ingredients/${_id}`, {userId: user._id})
        .then(res =>{
            setAllIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient._id !== _id? ingredient:res.data))
        })
        .catch(err => console.log(err))
    }

    function handleToggle(){
        setEditTog( prevToggle => !prevToggle)
    }

    function handleNewChange(e){
        const {name, value} = e.target 
        setEditedInputs(prevEditedInputs =>({
            ...prevEditedInputs,
            [name]:value
        }))
    }

    function handleEdit(editedInputs){
        userAxios.put(`/api/ingredients/${_id}`, editedInputs)
        .then(res =>{
            setAllIngredients(prevIngredients => prevIngredients.map(ingredient => ingredient._id !== _id ? ingredient : res.data))
        })
        .catch(err => console.log(err))
    }

    function handleSubmit(e){
        e.preventDefault()
        handleEdit()
        setEditTog(prevToggle => !prevToggle)
    }
    return(
        <>
            <div className="newPosts">
                {!edi}
            </div>
        </>
    )
}