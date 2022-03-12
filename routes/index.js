const express = require('express');

const router = express.Router();

const usersRouter = require('./users');

/* GET home page. */
router.use('/', () => console.log('Server Working'));
router.use('/users', usersRouter);

module.exports = router;
