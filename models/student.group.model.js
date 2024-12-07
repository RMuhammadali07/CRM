const { Schema, model } = require("mongoose");
const { Student } = require("./student.model");
const { Group } = require("./group.model");

const student_group = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: Student },
  group_id: { type: Schema.Types.ObjectId, ref: Group },
});

const StudentGroup = model("studentGroup", student_group);

module.exports = { StudentGroup };
