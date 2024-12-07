const { Schema, model } = require("mongoose");
const { Group } = require("./group.model")

const lessonModel = new Schema({
  lesson_theme: { type: String, required: true },
  lesson_number: { type: String, required: true },
  group_id: {type: Schema.Types.ObjectId, ref: Group},
  lesson_date: { type: String, required: true },
});

const Lesson = model("lesson", lessonModel);
module.exports = { Lesson };
