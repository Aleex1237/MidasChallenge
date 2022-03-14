const express = require('express');

const router = express.Router();

const moviesController = require('../controllers/movies');

/* GET movies listing. */
router.get('/', moviesController.getAll);

router.get('/:id', moviesController.getById);

router.delete('/:id', moviesController.removeCharacters);

router.delete('/', moviesController.deleteAllData);

module.exports = router;
