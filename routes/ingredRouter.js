const express = require('express')
const ingredRouter = express.Router()
const Ingredients = require('../models/ingredients')
const User = require('../models/user')
const Recipe = require('../models/recipe')

ingredRouter.post('/', (req, res, next) =>{
    req.body.user = req.auth._id
    const ingred = new Ingredients(req.body)
    ingred.save((err, newIngred) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newIngred)
    })
})

ingredRouter.get('/', (req, res, next) =>{
    Ingredients.find()
    .populate('user')
    .then(ingred =>{
        return res.status(200).send(ingred)
    })
    .catch(err => console.log(err))
})

ingredRouter.get('/:userId', (req, res, next) =>{
    Ingredients.find({user: req.auth._id}, (err, ingred) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(ingred)
    })
})

ingredRouter.put('/:ingredId', (req, res, next) =>{
    Ingredients.findByIdAndUpdate(
        {_id: req.params.ingredId, user: req.auth._id},
        req.body,
        {new: true}
    )
    .populate('user')
        .then((err, updatedIngred) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIngred)
        })
})

ingredRouter.delete('/:ingredId', (req, res, next) =>{
    Ingredients.findByIdAndDelete({ _id:req.params.ingredId, user: req.auth._id }, (err, deletedIngred) => {
        console.log(req.params.ingredId)
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedIngred )
    })
})

module.exports = ingredRouter