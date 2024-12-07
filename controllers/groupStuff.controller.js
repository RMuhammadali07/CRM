const { GroupStuff } = require("../models/groupStuff.model");

// ------------------------Create GroupStuff ----------------

const createGroupStuff = async (req, res) => {
  try {
    const { group_id, stuff_id } = req.body;

    const newGroupStuff = new GroupStuff({
      stuff_id,
      group_id,
    });
    await newGroupStuff.save();
    return res.status(201).json({
      success: true,
      message: "group va stuff muvaffaqiyatli olindi",
    });
  } catch (err) {
    console.error("xato:", err);
    return res.status(500).json({
      success: false,
      message:
        "Server xatosi: group va stuff qo'shish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ GetGroupStuff ----------------

const getGroupStuff = async (req, res) => {
  try {
    const groupStuff = await GroupStuff.find();
    res.json({
      success: true,
      message: "GroupStuffning barcha ro'yxati",
      innerData: groupStuff,
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

// ------------------------ GetStuffRoleById ----------------

const getGroupStuffById = async (req, res) => {
  try {
    const groupStuffId = req.params.id;

    const groupStuff = await GroupStuff.findById(groupStuffId).populate("stuff_id group_id");

    if (!groupStuff) {
      return res.status(404).json({ message: "Ro'yxat topilmadi." });
    }
    res.json({ message: "Ro'yxat topilmadi.", groupStuff });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ------------------------ DeleteGroupStuff ----------------

const deletedGroupStuffById = async (req, res) => {
  try {
    const groupStuffId = req.params.id;

    const groupStuff = await GroupStuff.findByIdAndDelete(groupStuffId);

    if (!groupStuff) {
      return res.status(404).json({ massage: "GroupStuff not found" });
    }
    res.json({ massage: "GroupStuff deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateGroupStuff ----------------

const updateGroupStuffById = async (req, res) => {
  try {
    const groupStuffId = req.params.id;
    const updatedGroupStuff = req.body;

    const groupStuff = await GroupStuff.findByIdAndUpdate(
      groupStuffId,
      updatedGroupStuff,
      { new: true }
    );

    res.json({
      massage: "GroupStuff updated successfully",
      groupStuff,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
    createGroupStuff,
    getGroupStuff,
    getGroupStuffById,
    deletedGroupStuffById,
    updateGroupStuffById,
};
