var express = require('express');
var router = express.Router();


//displays our homepage
router.get('/', function(req, res){
  res.render('index');
});

router.get('/support', function(req, res){
  res.render('index');
});

module.exports = router;
