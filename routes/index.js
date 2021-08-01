const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Answers } = require('../models');
const sequelize = require('../config/connection');

router.use('/api', apiRoutes);

router.get("/", async (req, res) => {
    try {
        res.render("homepage")
    } catch(err) {
        res.status(500).json(err);
    }
});

//this is legit
// router.get('/resultspage', async (req, res) => {
//     try {
//         const answerData = await Answers.findAll({
//             include: [
//                 {
//                     model: User,
//                 }
//             ]
//         },
//             { where:
//             { user_id: req.session.user_id}
//         })
//         const answer = answerData.get({ plain: true });
        
//         console.log( answer)
//         res.render("results", {
//             answer
//         })
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//     });

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
        console.log( "test test test" + userData)
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

  router.get('/resultspage', async (req, res) => {
    try {
        const answersData = await Answers.findAll({
        where:
        { "user_id": 5}
     }
     );
        //   res.status(200).json(answersData);
        res.render("resultspage", {
        salary: answersData[0].salary,
         skill: answersData[1].skill,
         hours: answersData[2].hours_per_week,
         earnings: answersData[3].earn_per_week,
         ranking: answersData[4].ranking,
         fairsalary: answersData[5].fairsalary,
        //  benefits: answersData[6].benefitsselectionarray,
        //   addtlwork: answerData[0].salary,
         employapp: answersData[7].employapp,
         percent:  answersData[9].percent,
        })
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   fakeget = async (req)  => {
//        return req.session.emptyarray;
//   }

  router.get('/allanswers', async (req, res) => {
    try {
        const answersData = await Answers.findAll({
    //     include: [
    //         {
    //             model: User,
    //         }
    //     ]
    // },
         where:
        { "user_id": 5}
    });
    console.log(answersData);
    res.status(200).json(answersData); 
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //POTENTIAL HOURS CALCULATION RETURNED IN JSON OBJECT, need to figure out how to capture it permanently 
  router.get('/math', async (req, res) => {
    try {
         const answersData = await Answers.findAll({ 
        //   where: Sequelize.literal('answer_id =90')
          include: [{ model: User}],
          attributes: {
               include: [
                   [
                     sequelize.literal(
                         `(SELECT hours_per_week*.9 FROM answers_a WHERE answer_id =90)`
                    ),
                     "potential_hours",
                   ],
               ],
           },
          where:
          { "user_id": 5}
    });
    console.log(answersData[0].salary);
// res.status(200).json(answersData);
    res.render("resultspage", 
     { salary: answersData[0].salary}
         )
 }
     catch (err) {
      res.status(500).json(err);
    }
  });

//define DB?
//   router.get('/hours', async (req, res) => {
//           potentialhours = await db.equelize.query('SELECT hours_per_week*.9 FROM answers_a WHERE answer_id =90',
//          {
//             type: db.sequelize.Query.Types.SELECT
        
//          })
//         });
         
       //  Answers.findAll({
        //   where: Sequelize.literal('answer_id =90')
//           include: [{ model: User}],
//           attributes: {
//                include: [
//                    [
//                      sequelize.literal(
//                          `(SELECT hours_per_week*.9 FROM answers_a WHERE answer_id =90)`
//                     ),
//                      "potential_hours",
//                    ],
//                ],
//            },
//           where:
//           { "user_id": 5}
//     });
//     console.log(answersData[0].potential_hours);
// res.status(200).json(answersData);
//   });

module.exports = router;