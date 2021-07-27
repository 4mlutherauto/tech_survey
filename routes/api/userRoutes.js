const router = require('express').Router();

const User = require('../../models/User');

router.post("/", async (req,res) => {
    try {
        const newUser = await User.create({
            email: req.body.email
        })
        res.status(200).json(newUser);
    } catch (err) {
        console.log("email not saved"), res.status(400).json(err);
    }
});


module.exports = router;