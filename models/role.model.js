const { Schema, model } = require("mongoose");

const roleModel = new Schema({
    name: { type: String, required: true, trim: true},
})

const Role = model("role", roleModel)
module.exports = { Role }
