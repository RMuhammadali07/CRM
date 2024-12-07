const { Schema, model } = require("mongoose");
const { Stuff } = require('./stuff.model')
const { Role } = require('./role.model')

const stuff_role = new Schema({
    stuff_id: {type: Schema.Types.ObjectId, ref: Stuff},
    role_id: {type: Schema.Types.ObjectId, ref: Role}
})

const StuffRole = model('stuffRole', stuff_role)

module.exports = { StuffRole }
