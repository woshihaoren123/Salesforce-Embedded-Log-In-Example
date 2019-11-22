var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(1111111)
    res.render('callback', { title: 'callback' });
});

module.exports = router;