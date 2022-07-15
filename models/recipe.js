const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    strMeal:{
        type:String,
       
    },
    strMealThumb:{
        type:String
    },
    strInstructions:{
        type: String,
        
    },
    
    strIngredient1:{
        type: String,
       
    },
    strIngredient2:{
        type: String,
       
    },
    strIngredient3:{
        type: String,
       
    },
    strIngredient4:{
        type: String,
       
    },
    strIngredient5:{
        type: String,
       
    },
    strIngredient6:{
        type: String,
       
    },
    strIngredient7:{
        type: String,
       
    },
    strIngredient8:{
        type: String,
       
    },
    strIngredient9:{
        type: String,
       
    },
    strIngredient10:{
        type: String,
       
    },
    strIngredient11:{
        type: String,
       
    },
    strIngredient12:{
        type: String,
       
    },
    strIngredient13:{
        type: String,
       
    },
    strIngredient14:{
        type: String,
       
    },
    strIngredient15:{
        type: String,
       
    },
    strIngredient16:{
        type: String,
       
    },
    strIngredient17:{
        type: String,
       
    },
    
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    idMeal:{
        type:String,
    }
    
})

module.exports = mongoose.model('Recipe', recipeSchema)