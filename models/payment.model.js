const { Schema, model } = require("mongoose");
const { Student } = require("./student.model");

const paymentModel = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: Student },
  payment_last_date: { type: String, required: true },
  payment_date: { type: String, required: true },
  price: { type: Number, required: true },
  is_paid: { type: Boolean, required: true },
  total_attent: { type: Number, required: true },
});

const Payment  = model("payment", paymentModel);
module.exports = { Payment };
