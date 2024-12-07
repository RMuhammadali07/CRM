const { Schema, model } = require("mongoose");
const { Lid } = require("./lid.model");

const studentModel = new Schema({
  lid_id: { type: Schema.Types.ObjectId, ref: Lid },
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  phone_number: { type: String, required: true },
  bithday: { type: String, required: true },
  gender: { type: String, required: true },
});

const Student = model("student", studentModel);

module.exports = {
  Student,
};
