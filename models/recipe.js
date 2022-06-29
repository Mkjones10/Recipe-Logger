const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    instructions:{
        type: String,
        required: true
    },
    time:{
        type: String
    },
    ingredientS:{
        type: String,
        required: true
    },
    upVotes:[{
        user: {
            type: Schema.Types.ObjectId
        }
    }],
    downVotes:[{
        user: {
            type: Schema.Types.ObjectId
        }
    }],
    votesTotal: {
        type: Number,
        default: 0
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
})

module.exports = mongoose.model('Recipe', recipeSchema)