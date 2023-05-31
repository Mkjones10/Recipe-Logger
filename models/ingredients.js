const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ingredientsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    boughtAt:{
        type: String,
        required: true
    },
    description:{
        type: String,
        
    },
    imgurl:{
        type: String
    },
    isUsed:{
        type:Boolean,
        default: false
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
})

module.exports = mongoose.model('Ingredients', ingredientsSchema)