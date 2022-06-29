const express = require('express')
const commentRouter = express.Router()
const Comments = require('../models/comments')
const User = require('../models/user')
const Recipe = require('../models/recipe')

commentRouter.post('/:recipeId', (req, res, next) =>{
    let recipeId = req.params.recipeId
    req.body.user = req.auth._id
    req.body.recipe = recipeId
    const comment = new Comments(req.body)
    comments.save((err, newComments) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newComments)
    })
})

commentRouter.get('/', (req, res, next) =>{
    Comments.find((err, comments) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.get('/:recipeId', (req, res, next ) =>{
    Comments.find({recipe: req.params.recipeId}, (err, comments)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

module.exports = commentRouter