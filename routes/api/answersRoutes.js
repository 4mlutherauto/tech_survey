const router = require('express').Router();
const Answers = require('../../models/Answers');

        
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
