var express = require('express');
var router = express.Router();


//displays our homepage
router.get('/', function(req, res){
  res.render('index');
});

router.get('/academics', function(req, res){
  res.render('academics');
});

router.get('/admissions', function(req, res){
  res.render('admissions');
});

router.get('/library', function(req, res){
  res.render('library');
});

router.get('/ourProgram', function(req, res){
  res.render('ourProgram');
});

router.get('/alumni', function(req, res){
  res.render('alumni');
});

router.get('/parents', function(req, res){
  res.render('parents');
});

router.get('/support', function(req, res){
  res.render('support');
});

router.get('/about', function(req, res){
  res.render('about');
});

module.exports = router;
