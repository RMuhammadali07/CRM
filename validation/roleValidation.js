const Joi = require("joi");

const registerValidationSchema = Joi.object({
  name: Joi.string(),
});

const updateValidationSchema = Joi.object({
  name: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
