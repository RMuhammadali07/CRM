const { Stage } = require("../models/stage.model");

// ------------------------Get Stage ----------------
const getStage = async (req, res) => {
  try {
    const stage = await Stage.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: stage,
    });
  } catch (error) {
    console.error("Error fetching stage", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ Create Stage ----------------

const createStage = async (req, res) => {
  try {
    const { name } = req.body;

    const newStage = new Stage({
      name,
    });
    await newStage.save();
    return res.status(201).json({
      success: true,
      message: "Stage muvoffaqiyatli olindi",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Ro'yxat qo'shish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ GetStageById ----------------
const getStageById = async (req, res) => {
  try {
    const stageId = req.params.id;

    const stage = await Stage.findById(stageId);

    if (!stage) {
      return res.status(404).json({ massage: "stage not found" });
    }
    res.json({ massage: "stage found", stage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateStage ----------------

const updateStageById = async (req, res) => {
  try {
    const stageId = req.params.id;
    const updateStage = req.body;

    const stage = await Stage.findByIdAndUpdate(stageId, updateStage, {
      new: true,
    });

    res.json({ massage: "stage updated successfully", stage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteStage ----------------

const deleteStageById = async (req, res) => {
  try {
    const stageId = req.params.id;

    const stage = await Stage.findByIdAndDelete(stageId);

    if (!stage) {
      return res.status(404).json({ massage: "Stage not found" });
    }
    res.json({ massage: "Stage deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  getStage,
  createStage,
  getStageById,
  updateStageById,
  deleteStageById,
};