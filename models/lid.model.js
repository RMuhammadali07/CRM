const { Schema, model } = require("mongoose");
const { Stage } = require("./stage.model");
const { Lidstatus } = require("./lid_status.model");
const { Reasonlid } = require("./reason_lid.model");
const { Group } = require("./group.model");

const lidModel = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  lid_stage_id: { type: Schema.Types.ObjectId, ref: Stage },
  test_date: { type: String, required: true },
  trial_lesson_date: { type: String, required: true },
  trial_lesson_time: { type: String, required: true },
  trial_lesson_group_id: { type: Schema.Types.ObjectId, ref: Group },
  lid_status_id: { type: Schema.Types.ObjectId, ref: Lidstatus },
  cancel_reason_id: { type: Schema.Types.ObjectId, ref: Reasonlid },
});

const Lid = model("lid", lidModel);
module.exports = { Lid };
