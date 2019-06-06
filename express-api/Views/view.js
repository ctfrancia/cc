const express     = require('express'), 
    router        = express.Router(),
    controller    = require('../Controllers/controller');

//  == This route will give us back all: ==  //

router.get('/all', controller.get);

//  == This route allow us to add an extr: ==  //

router.post('/new', controller.insert);

//  == This route allow us to delete one fact will be that with the id we are providing: ==  //

router.post('/delete', controller.delete);

module.exports = router;
