const Joi = require("joi");

const registerValidationSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  call_number: Joi.number(),
});

const updateValidationSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  call_number: Joi.number(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
