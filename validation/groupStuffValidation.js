const Joi = require("joi");

const registerValidationSchema = Joi.object({
  group_id: Joi.string(),
  stuff_id: Joi.string(),
});

const updateValidationSchema = Joi.object({
  group_id: Joi.string(),
  stuff_id: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
