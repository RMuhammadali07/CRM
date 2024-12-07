const { Lesson } = require("../models/lesson.model");

// ------------------------Get Lesson ----------------
const getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: lesson,
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

// ------------------------ CreateLesson ----------------

const createLesson = async (req, res) => {
  try {
    const { lesson_theme, lesson_number, group_id, lesson_date } = req.body;

    const newLesson = new Lesson({
      lesson_theme,
      lesson_number,
      group_id,
      lesson_date,
    });
    await newLesson.save();
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

// ------------------------ GetLessonById ----------------
const getLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;

    const lesson = await Lesson.findById(lessonId).populate("group_id");

    if (!lesson) {
      return res.status(404).json({ massage: "lesson not found" });
    }
    res.json({ massage: "lesson found", lesson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateLesson ----------------

const updateLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;
    const updateLesson = req.body;

    const lesson = await Lesson.findByIdAndUpdate(lessonId, updateLesson, {
      new: true,
    });

    res.json({ massage: "lesson updated successfully", lesson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteLesson ----------------

const deleteLessonById = async (req, res) => {
  try {
    const lessonId = req.params.id;

    const lesson = await Lesson.findByIdAndDelete(lessonId);

    if (!lesson) {
      return res.status(404).json({ massage: "Lesson not found" });
    }
    res.json({ massage: "Lesson deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
    createLesson,
    getLesson,
    getLessonById,
    updateLessonById,
    deleteLessonById,
};
