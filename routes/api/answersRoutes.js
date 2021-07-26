const router = require('express').Router();

const Answers = require('../../models/Answers');


router.post("/", async (req,res) => {
    try {
        const newAnswers = await Answers.create({
            salary: req.body.pay,
            skill: req.body.skill,
            hours_per_week: req.body.hourans,
            ranking: req.body.rank
        })
        res.status(200).json(newAnswers);
    } catch (err) {
        console.log("answers not captured"), res.status(400).json(err);
    }
});

module.exports = router;