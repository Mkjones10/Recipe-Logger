import React from 'react'
import {Button }from 'react-bootstrap'

const initInputs = {
    name: '',
    boughtAt: '',
    description: ''
}


function IngredientsForm(props) {

    const { addIngredients } = props
    const [inputs, setInputs] = React.useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIngredients(inputs)
        setInputs(initInputs)
    }

    const { name, boughtAt, description } = inputs
    return (
        <>
        <div className ='header'>
            <form  className ='pf'>
                <input type="text" name='name' className='pin' value={name} onChange ={handleChange} placeholder ='Name'/>
                <input type="text" name='boughtAt' className='pin' value={boughtAt} onChange ={handleChange} placeholder='Bought At'/>
            </form> 
            <Button variant='secondary' onClick ={handleSubmit} size ='sm'>
                Add Ingredients
              </Button>
              </div>
        </>
    )
}

export default IngredientsForm
