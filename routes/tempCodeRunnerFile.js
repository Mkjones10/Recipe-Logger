authRouter.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username?.toLowerCase() });

        if (!user) {
            res.status(403);
            return next(new Error('Username or password are incorrect, try again'));
        }

        const isMatch = await user.checkPassword(req.body.password);

        if (!isMatch) {
            res.status(403);
            return next(new Error('Username or password is incorrect'));
        }

        const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
        return res.status(200).send({ token, user: user.withoutPassword() });
    } catch (err) {
        res.status(500);
        return next(err);
    }
});