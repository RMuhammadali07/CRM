const { Lidstatus } = require("../models/lid_status.model");

// ------------------------Get Lidstatus ----------------
const getLidstatus = async (req, res) => {
  try {
    const lidstatus = await Lidstatus.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: lidstatus,
    });
  } catch (error) {
    console.error("Error fetching Lidstatus", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreateLidstatus ----------------

const createLidstatus = async (req, res) => {
  try {
    const { status } = req.body;

    const newLidstatus = new Lidstatus({
      status,
    });
    await newLidstatus.save();
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

// ------------------------ GetLidstatusById ----------------
const getLidstatusById = async (req, res) => {
  try {
    const lidstatusId = req.params.id;

    const lidstatus = await Lidstatus.findById(lidstatusId);

    if (!lidstatus) {
      return res.status(404).json({ massage: "Lidstatus not found" });
    }
    res.json({ massage: "Lidstatus found", lidstatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateLidstatus ----------------

const updateLidstatusById = async (req, res) => {
  try {
    const lidstatusId = req.params.id;
    const updateLidstatus = req.body;

    const lidstatus = await Lidstatus.findByIdAndUpdate(
      lidstatusId,
      updateLidstatus,
      {
        new: true,
      }
    );

    res.json({ massage: "Lidstatus updated successfully", lidstatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteLidstatus ----------------

const deleteLidstatusById = async (req, res) => {
  try {
    const lidstatusId = req.params.id;

    const lidstatus = await Lidstatus.findByIdAndDelete(lidstatusId);

    if (!lidstatus) {
      return res.status(404).json({ massage: "Lidstatus not found" });
    }
    res.json({ massage: "Lidstatus deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createLidstatus,
  getLidstatus,
  getLidstatusById,
  updateLidstatusById,
  deleteLidstatusById,
};
