const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    strMeal:{
        type:String,
        required:true
    },
    strInstructions:{
        type: String,
        required: true
    },
    
    strIngredients:{
        type: String,
        required: true
    },
    
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
})

module.exports = mongoose.model('Recipe', recipeSchema)