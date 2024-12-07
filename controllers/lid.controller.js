const { Lid } = require("../models/lid.model");

// ------------------------Get Lid ----------------
const getLid = async (req, res) => {
  try {
    const lid = await Lid.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: lid,
    });
  } catch (error) {
    console.error("Error fetching lid", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreateLid ----------------

const createLid = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id,
    } = req.body;

    const newLid = new Lid({
      first_name,
      last_name,
      phone_number,
      lid_stage_id,
      test_date,
      trial_lesson_date,
      trial_lesson_time,
      trial_lesson_group_id,
      lid_status_id,
      cancel_reason_id,
    });
    await newLid.save();
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

// ------------------------ GetLidById ----------------
const getLidById = async (req, res) => {
  try {
    const lidId = req.params.id;

    const lid = await Lid.findById(lidId).populate(
      "lid_stage_id trial_lesson_group_id lid_status_id cancel_reason_id"
    );

    if (!lid) {
      return res.status(404).json({ massage: "lid not found" });
    }
    res.json({ massage: "lid found", lid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateLid ----------------

const updateLidById = async (req, res) => {
  try {
    const lidId = req.params.id;
    const updateLid = req.body;

    const lid = await Lid.findByIdAndUpdate(lidId, updateLid, {
      new: true,
    });

    res.json({ massage: "Lid updated successfully", lid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteLid ----------------

const deleteLidById = async (req, res) => {
  try {
    const lidId = req.params.id;

    const lid = await Lid.findByIdAndDelete(lidId);

    if (!lid) {
      return res.status(404).json({ massage: "Lid not found" });
    }
    res.json({ massage: "Lid deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createLid,
  getLid,
  getLidById,
  updateLidById,
  deleteLidById,
};
