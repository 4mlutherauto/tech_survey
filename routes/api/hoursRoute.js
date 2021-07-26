const router = require('express').Router();

const Hours = require('../../models/Hours');

router.post("/", async (req,res) => {
    try {
        const newHours = await Hours.create({
            hours_per_week: req.body.hourdata
        })
        res.status(200).json(newHours);
    } catch (err) {
        console.log("hours not captured"),
        res.status(500).json(err);
    }
});



// router.post('/', (req, res) => {
//     Hours.create({
//         hours_per_week: req.body.hours_per_week
//     })
//         .then((newHours) => {
//             res.json(newHours);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// get by individual id (primary key)
// router.get('/:id', (req, res) => {
//     Hours.findByPk(req.params.id).then((newHours) => {
//         res.json(newHours);
//     });
// });

//get all--doesn't work unless get/:id is commented out
// router.get('/all', (req, res) => {
//     Hours.findAll({}).then((newHours) => {
//         res.json(newHours);
//     });
// });

// router.delete('/:hours_id', (req, res) => {
//     Hours.destroy({
//         where: {
//             hours_id: req.params.hours_id
//         },
//     }
//     ).then((deletedHours) => {
//         res.json(deletedHours);
// })
//     .catch((err) => {
//         res.json(err);
//     });
// });

module.exports = router;