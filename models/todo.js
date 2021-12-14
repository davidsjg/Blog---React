const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: { type: Number },
  text: { type: String, required: true },
  completed: { type: Boolean },
  color: { type: String, required: false },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
