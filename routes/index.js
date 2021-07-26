const router = require('express').Router();

const apiRoutes = require('./api');
const Hours = require('../models/Hours')

router.use('/api', apiRoutes);

router.get("/", async (req, res) => {
    try {
        res.render("homepage")
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get("/questions", async (req, res) => {
    try {
        res.render("pay")
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get("/question2", async (req, res) => {
    try {
        res.render("hours")
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get("/next", async (req, res) => {
    try {
        res.render("answers")
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get("/allhours", async (req, res) => {
        const hoursalldata = await Hours.findAll().catch((err) => {
            res.json(err);
        });
        const morehours = hoursalldata.map((hours) => hours.get({ plain: true}));
        res.render('hoursdisplay', { morehours });
});

module.exports = router;