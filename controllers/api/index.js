const router = require('express').Router();

const userRoutes = require('./user-routes');
const pollRoutes = require('./poll-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/polls', pollRoutes);
router.use('/comments', commentRoutes);

module.exports = router;