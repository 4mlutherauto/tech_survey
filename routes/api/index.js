const router = require('express').Router();
const hoursRoutes = require('./hoursRoute');
const payRoutes = require('./payRoute');
const answerRoutes = require('./answersRoutes');

//prefix API routes accoring to model/table
router.use('/hours', hoursRoutes);
router.use('/pay', payRoutes);
router.use('/answers', answerRoutes);

module.exports = router;