const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', () => console.log('hola'));

module.exports = router;
