const { Role } = require("../models/role.model.js")

// ------------------------Get Role ----------------
const getRoles = async (req, res) => {
    try {
        const role = await Role.find({})
        res.json({
            success: true,
            message: "barcha ro'yxat",
            innerData: role,
        })
    } catch (error) {
        console.error("Error fetching roles", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi.",
        })  
    }
}

// ------------------------ CreateRole ----------------


const createRoles = async ( req, res ) => {
    try {
        const { 
            name,
        } = req.body;

        const newRole = new Role({
            name,
        });
        await newRole.save();
        return res.status(201).json({
            success: true,
            message: " muvoffaqiyatli olindi"
        });
    }catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({
          success: false,
          message: "Server xatosi: Ro'yxat qo'shish jarayonida xato yuz berdi.",
        });
    }
}

// ------------------------ GetRoleById ----------------
const getRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;

    const role = await Role.findById(roleId)

    if (!role) {
      return res.status(404).json({ massage: "role not found" });
    }
    res.json({ massage: "role found", role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ UpdateRole ----------------

const updateRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;
    const updateRole = req.body;

    const role = await Role.findByIdAndUpdate(roleId, updateRole, { new: true });

    res.json({ massage: "Role updated successfully", role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};

// ------------------------ DeleteRole ----------------

const deleteRoleById = async (req, res) => {
  try {
    const roleId = req.params.id;

    const role = await Role.findByIdAndDelete(roleId);

    if (!role) {
      return res.status(404).json({ massage: "Role not found" });
    }
    res.json({ massage: "Role deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "Internal Server Error" });
  }
};


module.exports = {
    getRoles,
    createRoles,
    getRoleById,
    updateRoleById,
    deleteRoleById,
}