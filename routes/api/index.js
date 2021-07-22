const router = require('express').Router();
const hoursRoutes = require('./hoursRoute');
const payRoutes = require('./payRoute');

//prefix API routes accoring to model/table
router.use('/hours', hoursRoutes);
router.use('/pay', payRoutes);

module.exports = router;