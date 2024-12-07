const Joi = require("joi");

const registerValidationSchema = Joi.object({
  group_name: Joi.string(),
  lesson_start_time: Joi.string(),
  lesson_continuous: Joi.string(),
  lesson_week_day: Joi.string(),
  group_stage_id: Joi.string(),
  room_number: Joi.string(),
  room_floor: Joi.string(),
  branch_id: Joi.string(),
  lessons_quant: Joi.string(),
  is_active: Joi.boolean(),
});

const updateValidationSchema = Joi.object({
  group_name: Joi.string(),
  lesson_start_time: Joi.string(),
  lesson_continuous: Joi.string(),
  lesson_week_day: Joi.string(),
  group_stage_id: Joi.string(),
  room_number: Joi.string(),
  room_floor: Joi.string(),
  branch_id: Joi.string(),
  lessons_quant: Joi.string(),
  is_active: Joi.boolean(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
