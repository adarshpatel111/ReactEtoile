// models/QA.js
const mongoose = require("mongoose");

const QASchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
  image:{
    type: String,
  },
  language: {
    type: String,
    required: true,
  },
  example: {
    type: String,
  },
  solution: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  isactive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifieddate: {
    type: Date,
    default: Date.now,
  },
});

const QA = mongoose.model("QA", QASchema);

module.exports = QA;
