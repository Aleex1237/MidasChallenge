const express = require('express');

const router = express.Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');

const authMiddleware = require('../middlewares/auth');
/* GET home page. */
router.use('/movies', authMiddleware.authUser, moviesRouter);
router.use('/users', usersRouter);

module.exports = router;
