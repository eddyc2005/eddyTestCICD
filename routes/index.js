var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Healthy!!');
});

/* GET home page. */
router.get('/eddyTest', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/eddyTest/test', function(req, res, next) {
  res.send('test success!!');
});

module.exports = router;
