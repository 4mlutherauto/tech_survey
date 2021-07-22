const router = require('express').Router();

const Pay = require('../../models/pay');


router.post('/', (req, res) => {
    Pay.create({
        pay_amount: req.body.pay_amount
    })
    .then((newPay) => {
        res.json(newPay);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;