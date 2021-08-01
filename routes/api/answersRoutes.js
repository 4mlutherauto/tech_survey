const router = require('express').Router();

const { sequelize } = require('../../config/connection');
const Answers = require('../../models/Answers');

// router.get("/results", async (req, res) => {
//     try {
//       const answerData = await Answers.findAll({ 
//         //   where: Sequelize.literal('answer_id =90')
//         //    include: [{ model: User}],
//           attributes: {
//                include: [
//                    [
//                      Sequelize.literal(`(SELECT "hours_per_week"*.9 FROM "answers_a" AS potential_hours WHERE "answer_id" ="90")`
//                     ),
                    
//                    ]
//                ],
//            },
//       });
//        //   include: [{ model: User}],
//     //    console.log(potential_hours);
//     res.status(200).json(answerData);
//       }
//       catch (err) {
//           res.status(400).json(err);
//       }
//     });

//     router.get("/results/:id", async (req, res) => {
//         try {
//             //byAnswerID
//           const answerData = await Answers.findByPk(req.params.id);
//         //   const answerData = await Answers.findByPk(req.params.id, {
//         //       include: [{ model: User }]
//         //   });
//         // if (!answerData) {
//         //     res.status(400).json({ message: 'No answers found with that id'});
//         //     return;
//         // }
//         res.status(200).json(answerData.addtlworkarray);
//           }
//           catch (err) {
//                 console.log("nope");
//               res.status(400).json(err);
//           }
//         });

        
router.post("/", async (req,res) => {
    try {
        const newAnswers = await Answers.create({
            email: req.session.email,
            salary: req.body.pay,
            skill: req.body.skill,
            hours_per_week: req.body.hourans,
            earn_per_week: req.body.earnings,
            ranking: req.body.rank,
            fairsalary: req.body.fairsalary,
            benefitselectionarray: req.body.benefitselectionobj,
            addtlworkarray: req.body.stringyobj,
            employapp: req.body.emplappreciation,
            percent: req.body.percent,
            staycurrent:  req.body.staycurrent,
            contedu: req.body.contedu,
            adveducation: req.body.adveducation,
            noeduincentive: req.body.noeduincentive,
            techtoolsarray: req.body.techtoolsarray,
            safetools: req.body.safetools,
            mechvstechtools: req.body.mechvstechtools,
            schedneed: req.body.schedneed,
            advopp: req.body.advopp,
            equalprod: req.body.equalprod,
            respect: req.body.respect,
            undervalue: req.body.undervalue,
            mechvstech: req.body.mechvstech,
            balance: req.body.balance,
            user_id: req.session.user_id
        })
        res.status(200).json(newAnswers);
    } catch (err) {
        console.log("answers not captured"), res.status(400).json(err);
    }
});

module.exports = router;
