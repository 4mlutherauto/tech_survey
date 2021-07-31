const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Answers } = require('../models');

router.use('/api', apiRoutes);

router.get("/", async (req, res) => {
    try {
        res.render("homepage")
    } catch(err) {
        res.status(500).json(err);
    }
});

//this is legit
router.get('/resultspage', async (req, res) => {
    try {
        const answerData = await Answers.findAll({
            include: [
                {
                    model: User,
                }
            ]
        },
            { where:
            { user_id: req.session.user_id}
        });
        console.log( answerData)
        res.render("results", {
            answerData,
            sessionid: req.session.user_id,
            emaildisplay: req.session.email,
        })
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.get('/resultspage/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Answers,
                }
            ]
        });
        const user = userData.get({ plain: true });
        console.log( userData)
        res.render("resultspage", {
            ...user
            // sessionid: req.session.user_id,
            // emaildisplay: req.session.email,
        })
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
            // include: [{ model: Answers }],
            // order: [['email', 'ASC']]
        });
        // const users = userData.map((project) => project.get({ plain: true }));
        // res.render('homepage', {
        //     users,
        // });
        res.status(200).json(userData);
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