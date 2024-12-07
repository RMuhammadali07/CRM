const { Schema, model } = require("mongoose");

const reasonlidModel = new Schema({
  reason_lid: { type: String, required: true },
});

const Reasonlid = model("Reasonlid", reasonlidModel);
module.exports = { Reasonlid };
