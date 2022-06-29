import React from 'react'

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
            <form onSubmit={handleSubmit} className ='pf'>
                <input type="text" name='name' className='pin' value={name} onChange ={handleChange} placeholder ='Name'/>
                <input type="text" name='boughtAt' className='pin' value={boughtAt} onChange ={handleChange} placeholder='Bought At'/>
                <input type="text" name='description' className='pin' value={description} onChange ={handleChange} placeholder ='Description'/>
                <button className='ingbtn'>Add Ingredients</button>

            </form> 
        </>
    )
}

export default IngredientsForm
