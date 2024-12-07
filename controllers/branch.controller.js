const { Branch } = require("../models/branch.model");

// ------------------------Get Branch ----------------
const getBranch = async (req, res) => {
  try {
    const branch = await Branch.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: branch,
    });
  } catch (error) {
    console.error("Error fetching branch", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};

// ------------------------ CreateBranch ----------------

const createBranch = async (req, res) => {
  try {
    const { 
        name,
        address,
        call_number
    } = req.body;

    const newBranch = new Branch({
      name,
      address,
      call_number,
    });
    await newBranch.save();
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

// ------------------------ GetBranchById ----------------
const getBranchById = async (req, res) => {
  try {
    const branchId = req.params.id;

    const branch = await Branch.findById(branchId);

    if (!branch) {
      return res.status(404).json({ massage: "branch not found" });
    }
    res.json({ massage: "branch found", branch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateBranch ----------------

const updateBranchById = async (req, res) => {
  try {
    const branchId = req.params.id;
    const updateBranch = req.body;

    const branch = await Branch.findByIdAndUpdate(branchId, updateBranch, {
      new: true,
    });

    res.json({ massage: "branch updated successfully", branch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteBranch ----------------

const deleteBranchById = async (req, res) => {
  try {
    const branchId = req.params.id;

    const branch = await Branch.findByIdAndDelete(branchId);

    if (!branch) {
      return res.status(404).json({ massage: "Branch not found" });
    }
    res.json({ massage: "Branch deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

module.exports = {
  getBranch,
  createBranch,
  getBranchById,
  updateBranchById,
  deleteBranchById,
};
