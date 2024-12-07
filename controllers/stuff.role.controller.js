const { StuffRole } = require('../models/stuff.role.model')


// ------------------------Create StuffRole ----------------

const createStuffRole = async ( req, res ) => {
    try {
        const { stuff_id, role_id } = req.body

        const newStuffRole = new StuffRole({
            stuff_id,
            role_id
        })
        await newStuffRole.save()
        return res.status(201).json({
            success: true,
            message: "stuff va role muvaffaqiyatli olindi"
        })
    }catch ( err ) {
        console.error("xato:", err);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Stuff va role qo'shish jarayonida xato yuz berdi."
        })
        
    }
}

// ------------------------ GetStuffRoles ----------------

const getStuffRoles = async ( req, res ) => {
    try {
        const stuffRoles = await StuffRole.find()
        res.json({
            success: true,
            message: "StuffRolening barcha ro'yxati",
            innerData: stuffRoles
        })
    }catch ( err ) {
        console.error("xato:", err);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Ro'yxatlarni taqdim qilish jarayonida xato yuz berdi."
        })
        
    }
}

// ------------------------ GetStuffRoleById ----------------

const getStuffRoleById = async ( req, res ) => {
    try {
        const stuffRoleId = req.params.id

        const stuffRole = await StuffRole.findById(stuffRoleId).populate("stuff_id role_id")

        if (!stuffRole) {
            return res.status(404).json({message: "Ro'yxat topildi."})
        }
        res.json({ message: "Ro'yxat topilmadi.", stuffRole})

    }catch ( err ) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// ------------------------ DeleteStuffRole ----------------

const deletedStuffRole = async (req, res) => {
    try {
        const stuffRoleId = req.params.id;

        const stuffRole = await StuffRole.findByIdAndDelete(stuffRoleId);

        if (!stuffRole) {
            return res.status(404).json({ massage: "stuffRole not found" });
        }
        res.json({ massage: "stuffRole deleted successfully" });

    }catch ( err ) {
        console.error(err);
        res.status(500).json({ massage: "Internal Server Error" });
        
    }
}

// ------------------------ UpdateStuffRole ----------------

const updateStuffRole = async (req, res) => {
    try {
        const stuffRoleId = req.params.id;
        const updatedStuffRole = req.body;

        const stuffRole = await StuffRole.findByIdAndUpdate(stuffRoleId, updatedStuffRole, { new: true });

        res.json({
          massage: "stuffRole updated successfully", stuffRole});

    } catch (err) {
        console.error(err);
        res.status(500).json({ massage: "Internal Server Error" });
        
    }
};
    

module.exports = {
  createStuffRole,
  getStuffRoles,
  getStuffRoleById,
  deletedStuffRole,
  updateStuffRole,
 
};
