const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Answers } = require('../models');
const { findAll } = require('../models/Answers');
router.use('/api', apiRoutes);

router.get("/", async (req, res) => {
    try {
        res.render("homepage")
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get("/results/:id", async (req, res) => {
    try {
        const answerData = await Answer.findByPk(req.params.answer_id, {
          include: [
            {
              model: User
            },
          ],
        });
    
        const answer = answerData.get({ plain: true });
    
        res.render("individualresults", {
          ...answer,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.get("/results", async (req, res) => {
    try {
        res.render("results")
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

    // router.get("/resultspage", async (req, res) => {
    //     try {
    //       attributes: {
    //       include: [
    //         [  database.sequelize.literal(`
    //         (SELECT *
    //         FROM answers_a)`),
    //         answerData
    //         ]
    //     ],
    //     },
    // });
      
    //       res.render("resultspage", {
    //         userData,
    //       });
    //     } catch (err) {
    //       res.status(500).json(err);
    //     }
    //   });


router.get("/next", async (req, res) => {
    try {
        res.render("answers")
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/users', async (req, res) => {
    try {
        const userData = await User.findAll({
            order: [['email', 'ASC']]
        });
        const users = userData.map((project) => project.get({ plain: true }));
        res.render('homepage', {
            users,
        });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// router.get("/allhours", async (req, res) => {
//         const hoursalldata = await Hours.findAll().catch((err) => {
//             res.json(err);
//         });
//         const morehours = hoursalldata.map((hours) => hours.get({ plain: true}));
//         res.render('hoursdisplay', { morehours });
// });

module.exports = router;