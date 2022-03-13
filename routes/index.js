const express = require('express');

const router = express.Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');

/* GET home page. */
router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

module.exports = router;
