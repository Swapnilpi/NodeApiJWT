//Validation
const Joi = require("@hapi/joi");

//Register for Valdiation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data, schema);
};

module.exports.registerValidation = registerValidation;

module.exports.loginValidation = loginValidation;