const Joi = require("joi");

const registerValidationSchema = Joi.object({
  reason_lid: Joi.string(),
});

const updateValidationSchema = Joi.object({
  reason_lid: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
