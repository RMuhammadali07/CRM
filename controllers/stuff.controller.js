const { Stuff } = require("../models/stuff.model");


// ------------------------Get Stuff ----------------

const getStuff = async (req, res) => {
  try {
    const stuff = await Stuff.find({});
    res.json({
      success: true,
      message: "barcha ro'yxat",
      innerData: stuff,
    });
  } catch (error) {
    console.error("Error fetching roles", error);
    res.status(500).json({
      success: false,
      message:
        "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
    });
  }
};


// ------------------------ Create Stuff ----------------

const createStuff = async (req, res) => {
  try {
    const { 
        first_name,
        last_name,
        phone_number,
        login,
        parol,
        is_active,
     } = req.body;

    const newStuff = new Stuff({
      first_name,
      last_name,
      phone_number,
      login,
      parol,
      is_active,
    });
    await newStuff.save();
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


// ------------------------ GetStuffById ----------------

const getStuffById = async (req, res) => {
  try {
    const stuffId = req.params.id;

    const stuff = await Stuff.findById(stuffId);

    if (!stuff) {
      return res.status(404).json({ massage: "stuff not found" });
    }
    res.json({ massage: "stuff found", stuff });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};


// ------------------------ UpdateStuff ----------------

const updateStuffById = async (req, res) => {
  try {
    const stuffId = req.params.id;
    const updateStuff = req.body;

    const stuff = await Stuff.findByIdAndUpdate(stuffId, updateStuff, {
      new: true,
    });

    res.json({ massage: "stuff updated successfully", stuff });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};


// ------------------------ DeleteStuff ----------------

const deleteStuffById = async (req, res) => {
  try {
    const stuffId = req.params.id;

    const stuff = await Stuff.findByIdAndDelete(stuffId);

    if (!stuff) {
      return res.status(404).json({ massage: "stuff not found" });
    }
    res.json({ massage: "stuff deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};


module.exports = {
  getStuff,
  createStuff,
  getStuffById,
  updateStuffById,
  deleteStuffById,
};
