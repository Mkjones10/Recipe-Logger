const express = require('express')
const recipe = require('../models/recipe')
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
    Recipe.findById(req.params.recipeId, (err, recipe) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(recipe)
    })
})

recipeRouter.put('/:recipeId', (req, res, next) => {
    Recipe.findByIdAndUpdate(
        { _id: req.params.recipeId, user: req.auth._id },
        req.body,
        { new: true })
        .populate('user')
        .then((err, updatedRecipe) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedRecipe)
        })
})

recipeRouter.put('/upVotes/:recipeId', (req, res, next) =>{
    Recipe.findById(req.params.recipeId, (err, recipe) =>{
        const upvoteExists = Array.from(recipe.upVotes).find(upvote => String(upvote.user) === req.auth._id)

        const downvoteExists = Array.from(recipe.downVotes).find(downvote => String(downvote.user === req.auth._id))

        if(!upvoteExists && !downvoteExists){
            recipe.upVotes.push({user: req.auth._id})
            recipe.votesTotal++

            recipe.save(err =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
        }

        else if(downvoteExists){
            recipe.upVotes.push({user: req.auth._id})
            recipe.votesTotal +=2
            recipe.save(err =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
        }
        else if(upvoteExists){
            recipe.upVotes.id(upvoteExists._id).remove()
            recipe.votesTotal--
            recipe.save(err =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
        }
        else {
            return res.status(200).send(recipe)
        }
    })
})

recipeRouter.put('/downVotes/:recipeId', (req, res, next) =>{
    Recipe.findById(req.params.recipeId, (err, recipe) =>{
        const upvoteExists = Array.from(recipe.upVotes).find(upvote => String(upvote.user) === req.auth._id)

        const downvoteExists = Array.from(recipe.downVotes).find(downvote => String(downvote.user === req.auth._id))

        if(!downvoteExists && !upvoteExists){
            recipe.downVotes.push({user: req.auth._id})
            recipe.votesTotal--

            recipe.save(err =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
        }
        else if(upvoteExists){
            recipe.upVotes.id(upvoteExists._id).remove()
            recipe.downVotes.push({user: req.auth._id})
            recipe.votesTotal -=2
            recipe.save(err =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
        }
        else if(downvoteExists){
            recipe.downVotes.id(downvoteExists._id).remove()
            recipe.votesTotal++
            recipe.save(err =>{
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(recipe)
            })
        }
        else {
            return res.status(200).send(recipe)
        }
    })
})

recipeRouter.delete('/:recipeId', (req, res, next) =>{
    Recipe.findByIdAndDelete({_id: req.params.recipeId, user: req.auth._id}, (err, deletedRecipe) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedRecipe.title}`)
    })
})

module.exports = recipeRouter