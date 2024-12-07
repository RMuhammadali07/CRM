const { Schema, model } = require("mongoose");

const lidstatusModel = new Schema({
  status: { type: String, required: true },
});

const Lidstatus = model("Lidstatus", lidstatusModel);
module.exports = { Lidstatus };
