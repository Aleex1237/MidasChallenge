const express = require('express');

const router = express.Router();

const moviesController = require('../controllers/movies');

/* GET users listing. */
router.get('/:id', moviesController.getById);

module.exports = router;
