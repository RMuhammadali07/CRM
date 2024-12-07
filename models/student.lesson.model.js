const { Schema, model } = require("mongoose");
const { Student } = require("./student.model");
const { Lesson } = require("./lesson.model");

const studentLessonModel = new Schema({
  lesson_id: { type: Schema.Types.ObjectId, ref: Lesson },
  student_id: { type: Schema.Types.ObjectId, ref: Student },
  is_there: { type: String, required: true },
  reason: { type: String, required: true },
  be_paid: { type: Boolean, required: true },
});


const StudentLesson = model("studentLesson", studentLessonModel);
module.exports = { StudentLesson };
