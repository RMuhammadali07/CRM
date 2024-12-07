const Joi = require("joi");

const registerValidationSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone_number: Joi.string(),
  lid_stage_id: Joi.string(),
  test_date: Joi.string(),
  trial_lesson_date: Joi.string(),
  trial_lesson_time: Joi.string(),
  trial_lesson_group_id: Joi.string(),
  lid_status_id: Joi.string(),
  cancel_reason_id: Joi.string(),
});

const updateValidationSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone_number: Joi.string(),
  lid_stage_id: Joi.string(),
  test_date: Joi.string(),
  trial_lesson_date: Joi.string(),
  trial_lesson_time: Joi.string(),
  trial_lesson_group_id: Joi.string(),
  lid_status_id: Joi.string(),
  cancel_reason_id: Joi.string(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
