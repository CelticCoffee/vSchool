var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//displays our homepage
router.get('/', function(req, res){
  res.render('index');
});

router.get('/about', function(req, res){
  res.render('about');
});

router.get('/admissions', function(req, res){
  res.render('admissions');
});

router.get('/academics', function(req, res){
  res.render('academics');
});

router.get('/ourProgram', function(req, res){
  res.render('ourProgram');
});

router.get('/calendar', function(req, res){
  res.render('calendar');
});

router.get('/parents', function(req, res){
  res.render('parents');
});

router.get('/contact', function(req, res){
  console.log('about the carrot');
  res.render('contact');
});

module.exports = router;
