const { Reasonlid } = require("../models/reason_lid.model");

// ------------------------Get Reasonlid ----------------
const getReasonlid = async (req, res) => {
  try {
    const reasonlid = await Reasonlid.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: reasonlid,
    });
  } catch (error) {
    console.error("Error fetching Reasonlid", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreateReasonlid ----------------

const createReasonlid = async (req, res) => {
  try {
    const { reason_lid } = req.body;

    const newReasonlid = new Reasonlid({
      reason_lid,
    });
    await newReasonlid.save();
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

// ------------------------ GetReasonlidById ----------------
const getReasonlidById = async (req, res) => {
  try {
    const reasonlidId = req.params.id;

    const reasonlid = await Reasonlid.findById(reasonlidId);

    if (!reasonlid) {
      return res.status(404).json({ massage: "Reasonlid not found" });
    }
    res.json({ massage: "Reasonlid found", reasonlid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateReasonlid ----------------

const updateReasonlidById = async (req, res) => {
  try {
    const reasonlidId = req.params.id;
    const updateReasonlid = req.body;

    const reasonlid = await Reasonlid.findByIdAndUpdate(
      reasonlidId,
      updateReasonlid,
      {
        new: true,
      }
    );

    res.json({ massage: "Reasonlid updated successfully", reasonlid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteReasonlid ----------------

const deleteReasonlidById = async (req, res) => {
  try {
    const reasonlidId = req.params.id;

    const reasonlid = await Reasonlid.findByIdAndDelete(reasonlidId);

    if (!reasonlid) {
      return res.status(404).json({ massage: "Reasonlid not found" });
    }
    res.json({ massage: "Reasonlid deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
    createReasonlid,
    getReasonlid,
    getReasonlidById,
    updateReasonlidById,
    deleteReasonlidById,
};
