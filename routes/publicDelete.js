const express = require('express')

const publicDeleteRouter = express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')

publicDeleteRouter.delete('/:recipeId', (req, res, next) =>{
    Recipe.findOneAndDelete({idMeal: req.params.recipeId, user: req.auth._id}, (err, deletedRecipe) => {
        if(err){
            console.log(idMeal)
            res.status(404)
            return next(err)
        }
        console.log('successfully deleted: ', deletedRecipe)
        return res.status(200).send(`Successfully deleted ${deletedRecipe}`)
    })
})
module.exports = publicDeleteRouter