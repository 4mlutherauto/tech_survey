const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Answers } = require('../models');
const sequelize = require('../config/connection');

router.use('/api', apiRoutes);

router.get("/", async (req, res) => {
  try {
    res.render("homepage")
  } catch (err) {
    res.status(500).json(err);
  }
});

//ALL ANSWERS BY USER ID
router.get('/users/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      where:  {user_id : req.session.user_id},
      include: [
        {
          model: Answers,
        }
      ]
    });
    const user = userData.get({ plain: true });
    // console.log("test test test" , user);
    res.status(200).json(user)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//INDIVIDUAL RESULTS PAGE--MUST HAVE USERID # AFTER LAST /
router.get('/resultspage/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      where:  {user_id : req.session.user_id},
      include: [
        {
          model: Answers,
        }
      ],
    });
    const user = userData.get({ plain: true });
    console.log("test test test" , user);
    // res.status(200).json(user)
     res.render("results", {
      percent:user.answers_as[8].percent,
      hours: user.answers_as[1].hours_per_week,
      salary: user.answers_as[2].earn_per_week,
      ranking: user.answers_as[3].ranking,
      email: user.email,
      work: JSON.parse(user.answers_as[7].addtlworkarray),
     })
     console.log("working?", user.answers_as[7].addtlworkarray);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//START THE SURVEY
router.get("/next", async (req, res) => {
  try {
    res.render("answers")
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USERS
router.get('/users', async (req, res) => {
  try {
    const userData = await User.findAll({
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/resultspage', async (req, res) => {
  try {
    const answersData = await Answers.findAll({
        where:
        {
          "user_id": req.session.user_id
        },
    });
    //  console.log(answersData[0].potential_hours);
    // res.status(200).json(answersData);
    res.render("results", {
     email: answersData[0].email,
    //  skill: answersData[0].skill,
     hours: answersData[1].hours_per_week,
     salary: answersData[2].earn_per_week,
     ranking: answersData[3].ranking,
    //  addtlwork: JSON.parse(answerData[7].addtlwork),
    
    //  fairsalary: answersData[4].fairsalary,
    // //  benefits: answersData[6].benefitsselectionarray,
    // //   addtlwork: answerData[0].salary,
    //  employapp: answersData[6].employapp,
      percent:  answersData[8].percent,
    //  potential_hours: answersData[0].potential_hours,
   })
  //  console.log(answerData[7]);
  } catch (err) {
    res.status(500).json(err);
  }
});


//TESTING SEQUELIZE LITERAL, returns potential_hours for session user
//VERY difficult to try to use more than one sequelize literal per route
router.get('/potentialhours', async (req, res) => {
  try {
    let answersData = await Answers.findAll({
      where: (
        // does not work --> {"user_id" : req.session.user_id} 

        sequelize.literal(`SELECT JSON_ARRAY(addtlworkarray) FROM answers_a WHERE addtlworkarray <> "" AND user_id =2;`)
        //does not work to add 2nd sql literal-->  || sequelize.literal('percent <> ""')
      ),
      //  ),
      // attributes: {
      //   include: [
      //     [
      //       //  sequelize.literal('hours_per_week = 44'),
      //       //  "potential_hours",
      //       sequelize.literal(
      //         `(SELECT hours_per_week*.9 WHERE hours_per_week <> "")`
      //       ),
      //       "potential_hours",
      //     ],
      //     //      sequelize.literal(
      //     //       `(SELECT percent*100 WHERE percent <> "")`
      //     //  ),
      //     //   "percent_under_hood_per_day",
      //   ],
      // }
    })
    for (let i = 0; i < answersData.length; i++) {

      if (answersData[i].user_id = req.session.user_id) {
        answersData = answersData[i];
        res.status(200).json(answersData);
      }
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;