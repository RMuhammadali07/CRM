const Joi = require("joi");

const registerValidationSchema = Joi.object({
  stuff_id: Joi.string(),
  role_id: Joi.string(),
});

const updateValidationSchema = Joi.object({
  stuff_id: Joi.string(),
  role_id: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
