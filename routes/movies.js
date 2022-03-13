const express = require('express');

const router = express.Router();

const moviesController = require('../controllers/movies');

/* GET users listing. */
router.get('/:id', moviesController.getById);

router.delete('/:id', moviesController.removeCharacters);

router.delete('/', moviesController.deleteAllData);

module.exports = router;
