const Joi = require("joi");

const registerValidationSchema = Joi.object({
  student_id: Joi.string(),
  group_id: Joi.string(),
});

const updateValidationSchema = Joi.object({
  student_id: Joi.string(),
  group_id: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
