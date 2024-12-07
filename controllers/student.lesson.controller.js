const { StudentLesson } = require("../models/student.lesson.model");

// ------------------------Get StudentLesson ----------------
const getStudentLesson = async (req, res) => {
  try {
    const studentLesson = await StudentLesson.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: studentLesson,
    });
  } catch (error) {
    console.error("Error fetching lesson", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreateStudentLesson ----------------

const createStudentLesson = async (req, res) => {
  try {
    const { 
        lesson_id,
        student_id,
        is_there,
        reason,
        be_paid
     } = req.body;

    const newStudentLesson = new StudentLesson({
      lesson_id,
      student_id,
      is_there,
      reason,
      be_paid,
    });
    await newStudentLesson.save();
    return res.status(201).json({
      success: true,
      message: " muvoffaqiyatli olindi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Ro'yxat qo'shish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ GetStudentLessonById ----------------
const getStudentLessonById = async (req, res) => {
  try {
    const studentLessonId = req.params.id;

    const studentLesson = await StudentLesson.findById(
      studentLessonId
    ).populate("student_id lesson_id");
    console.log(studentLesson);

    if (!studentLesson) {
      return res.status(404).json({ massage: "StudentLesson not found" });
    }
    res.json({ massage: "StudentLesson found", studentLesson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateStudentLesson ----------------

const updateStudentLessonById = async (req, res) => {
  try {
    const studentLessonId = req.params.id;
    const updateStudentLesson = req.body;

    const studentLesson = await StudentLesson.findByIdAndUpdate(studentLessonId, updateStudentLesson, {
      new: true,
    });

    res.json({ massage: "lesson updated successfully", studentLesson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteStudentLesson ----------------

const deleteStudentLessonById = async (req, res) => {
  try {
    const studentLessonId = req.params.id;

    const studentLesson = await StudentLesson.findByIdAndDelete(studentLessonId);

    if (!studentLesson) {
      return res.status(404).json({ massage: "StudentLesson not found" });
    }
    res.json({ massage: "StudentLesson deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createStudentLesson,
  getStudentLesson,
  getStudentLessonById,
  updateStudentLessonById,
  deleteStudentLessonById,
};
