const { Schema, model } = require("mongoose");
const { Group } = require("./group.model");
const { Stuff } = require("./stuff.model");

const group_stuff = new Schema({
  stuff_id: { type: Schema.Types.ObjectId, ref: Stuff },
  group_id: { type: Schema.Types.ObjectId, ref: Group },
});

const GroupStuff = model("groupStuff", group_stuff);

module.exports = { GroupStuff };
