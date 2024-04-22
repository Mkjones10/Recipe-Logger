const express = require('express');
const authRouter = express.Router();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

authRouter.post('/signup', async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ username: req?.body?.username?.toLowerCase() });

        if (existingUser) {
            return res.status(403).send({ message: "That username is already taken" });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user object with hashed password
        const newUser = new User({
            username: req.body.username.toLowerCase(),
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
        return res.status(200).send({ token, user: savedUser.withoutPassword() });
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

authRouter.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username?.toLowerCase() });

        if (!user) {
            return res.status(403).send({ message: 'Username or password are incorrect, try again' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(403).send({ message: 'Username or password is incorrect' });
        }

        const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
        return res.status(200).send({ token, user: user.withoutPassword() });
    } catch (err) {
        return next(err);
    }
});

module.exports = authRouter;