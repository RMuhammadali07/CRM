const Joi = require("joi");

const registerValidationSchema = Joi.object({
  lesson_theme: Joi.string(),
  lesson_number: Joi.string(),
  group_id: Joi.string(),
  lesson_date: Joi.string(),
});

const updateValidationSchema = Joi.object({
  lesson_theme: Joi.string(),
  lesson_number: Joi.string(),
  group_id: Joi.string(),
  lesson_date: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
