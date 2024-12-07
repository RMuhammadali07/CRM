const { Group } = require("../models/group.model");

// ------------------------Get Group ----------------
const getGroup = async (req, res) => {
  try {
    const group = await Group.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: group,
    });
  } catch (error) {
    console.error("Error fetching group", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreateGroup ----------------

const createGroup = async (req, res) => {
  try {
    const {
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_id,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    } = req.body;

    const newGroup = new Group({
      group_name,
      lesson_start_time,
      lesson_continuous,
      lesson_week_day,
      group_stage_id,
      room_number,
      room_floor,
      branch_id,
      lessons_quant,
      is_active,
    });
    await newGroup.save();
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

// ------------------------ GetGroupById ----------------
const getGroupById = async (req, res) => {
  try {
    const groupId = req.params.id;

    const group = await Group.findById(groupId).populate("group_stage_id branch_id");

    if (!group) {
      return res.status(404).json({ massage: "group not found" });
    }
    res.json({ massage: "group found", group });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateGroup ----------------

const updateGroupById = async (req, res) => {
  try {
    const groupId = req.params.id;
    const updateGroup = req.body;

    const group = await Group.findByIdAndUpdate(groupId, updateGroup, {
      new: true,
    });

    res.json({ massage: "group updated successfully", group });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteGroup ----------------

const deleteGroupById = async (req, res) => {
  try {
    const groupId = req.params.id;

    const group = await Group.findByIdAndDelete(groupId);

    if (!group) {
      return res.status(404).json({ massage: "group not found" });
    }
    res.json({ massage: "group deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  createGroup,
  getGroup,
  getGroupById,
  updateGroupById,
  deleteGroupById,
};
