const router = require('express').Router();

const Hours = require('../../models/hours');

router.post('/', (req, res) => {
    Hours.create({
        hours_per_week: req.body.hours_per_week
    })
    .then((newHours) => {
        res.json(newHours);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;