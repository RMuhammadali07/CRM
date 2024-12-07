const { StudentGroup } = require("../models/student.group.model");

// ------------------------Create StudentGroup ----------------

const createStudentGroup = async (req, res) => {
  try {
    const { 
        student_id, 
        group_id 
    } = req.body;

    const newStudentGroup = new StudentGroup({
      student_id,
      group_id,
    });
    await newStudentGroup.save();
    return res.status(201).json({
      success: true,
      message: "StudentGroup muvaffaqiyatli olindi",
    });
  } catch (err) {
    console.error("xato:", err);
    return res.status(500).json({
      success: false,
      message:
        "Server xatosi: StudentGroup qo'shish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ GetStudentGroup ----------------

const getStudentGroup = async (req, res) => {
  try {
    const studentGroup = await StudentGroup.find();
    res.json({
      success: true,
      message: "StudentGroupning barcha ro'yxati",
      innerData: studentGroup,
    });
  } catch (err) {
    console.error("xato:", err);
    return res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ GetStudentGroupById ----------------

const getStudentGroupById = async (req, res) => {
  try {
    const studentGroupId = req.params.id;

    const studentGroup = await StudentGroup.findById(studentGroupId).populate(
      "student_id group_id"
    );

    if (!studentGroup) {
      return res.status(404).json({ message: "Ro'yxat topilmadi." });
    }
    res.json({ message: "Ro'yxat topilmadi.", studentGroup });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ------------------------ DeleteStudentGroup ----------------

const deletedStudentGroup = async (req, res) => {
  try {
    const studentGroupId = req.params.id;

    const studentGroup = await StudentGroup.findByIdAndDelete(studentGroupId);

    if (!studentGroup) {
      return res.status(404).json({ massage: "StudentGroup not found" });
    }
    res.json({ massage: "StudentGroup deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateStudentGroup ----------------

const updateStudentGroup = async (req, res) => {
  try {
    const studentGroupId = req.params.id;
    const updatedStudentGroup = req.body;

    const studentGroup = await StudentGroup.findByIdAndUpdate(
      studentGroupId,
      updatedStudentGroup,
      { new: true }
    );

    res.json({
      massage: "StudentGroup updated successfully",
      StudentGroup,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createStudentGroup,
  getStudentGroup,
  getStudentGroupById,
  deletedStudentGroup,
  updateStudentGroup,
};
