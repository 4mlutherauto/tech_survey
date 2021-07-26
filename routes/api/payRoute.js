const router = require('express').Router();

const Pay = require('../../models/Pay');


router.post("/", async (req,res) => {
    try {
        const newPay = await Pay.create({
            pay_amount: req.body.salary
        })
        res.status(200).json(newPay);
    } catch (err) {
        console.log("salary not captured"), res.status(400).json(err);
    }
});




router.post('/', (req, res) => {
    Pay.create(req.body)
    .then((newPay) => {
        res.json(newPay);
    })
    .catch((err) => {
        res.json(err);
    });
});

// router.get('/:id', (req, res) => {
//     Pay.findByPk(req.params.id).then((newPay) => {
//         res.json(newPay);
//     });
// });

module.exports = router;