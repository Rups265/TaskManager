const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  category: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
