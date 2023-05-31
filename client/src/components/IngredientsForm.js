import React from 'react'
import {Button }from 'react-bootstrap'

const initInputs = {
    name: '',
    boughtAt: '',
    description: '',
    imgurl: ''
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

    const { name, boughtAt, description, imgurl } = inputs
    return (
        <>
        <div className ='header'>
            <form  className ='pf'>
                <input type="text" name='name' className='pin' value={name} onChange ={handleChange} placeholder ='Title'/>
                <input type="date" name='boughtAt' className='pin' value={boughtAt} onChange ={handleChange} placeholder='Bought At'/>
                <input type="text" name='description' className='pin' value={description} onChange ={handleChange} placeholder='Description'/>
                <input type='imgurl' name='imgurl' className='pin' value={imgurl} onChange={handleChange} placeholder='insert image here'/>
            </form> 
            <Button variant='secondary' onClick ={handleSubmit} size ='sm'>
                Add A Post
              </Button>
              </div>
        </>
    )
}

export default IngredientsForm
