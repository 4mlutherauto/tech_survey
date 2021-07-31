const router = require('express').Router();

const User = require('../../models/User');

router.post("/", async (req,res) => {
    try {
        const user = new User({
            email: req.body.email
        });
        user.save().then((result) => {
            console.log(result);
            req.session.user_id = user.id;
            req.session.email = user.email;
            // req.session.first_name = user.first_name;
            console.log(user);
            console.log(req.session);
            res.status(200).json({
              message: "User created",
            });
          });
    } catch (err) {
        console.log("email not saved"), res.status(400).json(err);
    }
});


router.post('/', async (req, res) => {
    const emaildisplay = req.body.email;
    if (!emaildisplay) {
        res.status(400).json({ message: 'no email'});
        return;
    } else {
        req.session.save(() => {
        req.session.email =req.body.email;
        
        res.status(200).json({ message: "your email is " + emaildisplay });
    });
    }
})

module.exports = router;