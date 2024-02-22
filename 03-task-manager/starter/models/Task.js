const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    maxlength: [20, "name can not be more than 20 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
