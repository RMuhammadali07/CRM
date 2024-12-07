const Joi = require("joi");

const registerValidationSchema = Joi.object({
  student_id: Joi.string(),
  payment_last_date: Joi.string(),
  payment_date: Joi.string(),
  price: Joi.number(),
  is_paid: Joi.boolean(),
  total_attent: Joi.number(),
});

const updateValidationSchema = Joi.object({
  student_id: Joi.string(),
  payment_last_date: Joi.string(),
  payment_date: Joi.string(),
  price: Joi.number(),
  is_paid: Joi.boolean(),
  total_attent: Joi.number(),
});

module.exports = {
  registerValidationSchema,
  updateValidationSchema,
};
