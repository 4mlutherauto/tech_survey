const router = require('express').Router();
const answerRoutes = require('./answersRoutes');
const userRoutes = require('./userRoutes');
//prefix API routes accoring to model/table
router.use('/answers', answerRoutes);
router.use('/user', userRoutes);

module.exports = router;