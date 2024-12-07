const Joi = require("joi");

const registerValidationSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone_number: Joi.string(),
  login: Joi.string(),
  parol: Joi.string().required().min(3).max(30),
  is_active: Joi.boolean().required(),
});

const updateValidationSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone_number: Joi.string(),
  login: Joi.string(),
  parol: Joi.string().required().min(3).max(30),
  is_active: Joi.boolean().required(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
