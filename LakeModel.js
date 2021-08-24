const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LakeSchema = new Schema({
  lake: {
    type: String,
    trim: true,
    required: "String is required",
  },
  fishType: {
    type: String,
    trim: true,
    required: "String is required",
  },
  distance: {
    type: Number,
    required: true,
  },
});

const Lake = mongoose.model("Lake", LakeSchema);

module.exports = Lake;
