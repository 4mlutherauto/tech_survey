const router = require('express').Router();

const Pay = require('../../models/Pay');


// router.post('/', (req, res) => {
//     Pay.create({
//         pay_amount: req.body.pay_amount
//     })
//     .then((newPay) => {
//         res.json(newPay);
//     })
//     .catch((err) => {
//         res.json(err);
//     });
// });

router.get('/:id', (req, res) => {
    Pay.findByPk(req.params.id).then((newPay) => {
        res.json(newPay);
    });
});

module.exports = router, Pay;