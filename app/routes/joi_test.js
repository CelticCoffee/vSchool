var Joi = require('joi');

var schema = { Joi.object().keys({
  childFirstName: Joi.string().alphanum().min(2).max(10).required(),
  childLastName: Joi.string().alphanum().min(2).max(15).required(),
  email:  Joi.string().email()
});

//will fail//
Joi.validate({childFirstName: 2}, console.log);
//will pass//
Joi.validate({childLastName: 'smith'});

module.exports function(data, config) {
  config = config || {};
  var err = Joi.validate(data, schema, config);
  console.dir(err ? err : 'Valid!');
}
