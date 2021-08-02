const router = require('express').Router();
const answerRoutes = require('./answersRoutes');
const userRoutes = require('./userRoutes');

router.use('/answers', answerRoutes);
router.use('/user', userRoutes);

module.exports = router;