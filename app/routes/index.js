var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//displays our homepage
router.get('/', function(req, res){
  console.log('testing the path');
  res.render('index');
});

router.get('/about', function(req, res){
  console.log('about the banana');
  res.render('about');
});

router.get('/admissions', function(req, res){
  console.log('about the orange');
  res.render('admissions');
});

router.get('/academics', function(req, res){
  console.log('about the turnip');
  res.render('academics');
});

router.get('/ourProgram', function(req, res){
  console.log('about the cauliflower');
  res.render('ourProgram');
});

router.get('/calendar', function(req, res){
  console.log('about the squid');
  res.render('calendar');
});

router.get('/parents', function(req, res){
  res.render('parents');
});

router.get('/contact', function(req, res){
  console.log('about the carrot');
  res.render('contact');
});





/*****************************/
/*******Parent Login**********/
/*****************************/


module.exports = router;
