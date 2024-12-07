const Joi = require("joi");

const registerValidationSchema = Joi.object({
  status: Joi.string(),
});

const updateValidationSchema = Joi.object({
  status: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
