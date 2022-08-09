const express = require('express')

const recipeRouter = express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')

recipeRouter.get('/', (req, res, next) => {
    Recipe.find()
        .populate('user')
        .then(recipes => {
            return res.status(200).send(recipes)
        })
        .catch(err => console.log(err))
})

recipeRouter.post('/', (req, res, next) => {
    console.log(req.body)
    req.body.user = req.auth._id
    const recipe = new Recipe(req.body)
    
    recipe.save((err, newRecipe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newRecipe)
    })
})

recipeRouter.get('/:userId', (req, res, next) => {
    Recipe.find({ user: req.auth._id }, (err, recipies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(recipies)
    })
})

recipeRouter.get('/:recipeId', (req, res, next) => {
    Recipe.findOneById(req.params.recipeId, (err, recipe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(recipe)
    })
})



recipeRouter.delete('/:recipeId', (req, res, next) =>{
    Recipe.findOneAndDelete({idMeal: req.params.recipeId, user: req.auth._id}, (err, deletedRecipe) => {
        if(err){
            res.status(404)
            return next(err)
        }
        console.log('successfully deleted: ', deletedRecipe)
        return res.status(200).send(`Successfully deleted ${deletedRecipe}`)
    })
})
module.exports = recipeRouter