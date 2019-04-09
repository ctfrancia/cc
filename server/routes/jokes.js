const router = require('express').Router(),
    jokesController = require('../controllers/jokes');

router.get('/', jokesController);
module.exports = router;