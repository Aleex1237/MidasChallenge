const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users');

/* GET users listing. */
router.post('/', usersController.register);

router.post('/login', usersController.login);

module.exports = router;
