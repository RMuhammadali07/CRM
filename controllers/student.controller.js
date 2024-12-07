const { Student } = require("../models/student.model");

// ------------------------Get Student ----------------

const getStudent = async (req, res) => {
  try {
    const student = await Student.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: student,
    });
  } catch (error) {
    console.error("Error fetching Student", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ Create Student ----------------

const createStudent = async (req, res) => {
  try {
    const { 
        lid_id,
        first_name,
        last_name,
        phone_number,
        bithday,
        gender
     } = req.body;

    const newStudent = new Student({
      lid_id,
      first_name,
      last_name,
      phone_number,
      bithday,
      gender,
    });
    await newStudent.save();
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

// ------------------------ GetStudentById ----------------

const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await Student.findById(studentId).populate("lid_id");

    if (!student) {
      return res.status(404).json({ massage: "Student not found" });
    }
    res.json({ massage: "Student found", student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateStudent ----------------

const updateStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateStudent = req.body;

    const student = await Student.findByIdAndUpdate(studentId, updateStudent, {
      new: true,
    });

    res.json({ massage: "Student updated successfully", student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteStudent ----------------

const deleteStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await Student.findByIdAndDelete(studentId);

    if (!student) {
      return res.status(404).json({ massage: "Student not found" });
    }
    res.json({ massage: "Student deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createStudent,
  getStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
