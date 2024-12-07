const Joi = require("joi");

const registerValidationSchema = Joi.object({
  lesson_id: Joi.string(),
  student_id: Joi.string(),
  is_there: Joi.string(),
  reason: Joi.string(),
  be_paid: Joi.boolean(),
});

const updateValidationSchema = Joi.object({
  lesson_id: Joi.string(),
  student_id: Joi.string(),
  is_there: Joi.string(),
  reason: Joi.string(),
  be_paid: Joi.boolean(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
