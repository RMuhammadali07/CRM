const Joi = require("joi");

const registerValidationSchema = Joi.object({
  lid_id: Joi.string(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone_number: Joi.string(),
  bithday: Joi.string(),
  gender: Joi.string(),
});

const updateValidationSchema = Joi.object({
  lid_id: Joi.string(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone_number: Joi.string(),
  bithday: Joi.string(),
  gender: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
