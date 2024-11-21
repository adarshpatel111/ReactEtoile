// controllers/qaController.js
const QA = require("../models/questionAnswerModel.js");

// Create a new question and answer
exports.createQA = async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newQA = new QA({ question, answer });
    await newQA.save();
    res.status(201).json(newQA);
  } catch (err) {
    res.status(500).json({
      error: "Failed to create question and answer",
      message: err.message,
    });
  }
};

// Get all questions and answers
exports.getAllQA = async (req, res) => {
  const label = req.query.language;
  try {
    const qaList = await QA.find({ isactive: true, language: label });
    res.status(200).json(qaList);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch questions and answers",
      message: err.message,
    });
  }
};

// Get a specific question and answer by ID
// exports.getQAById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const qa = await QA.findById(id);
//     if (!qa) {
//       return res.status(404).json({ error: "Question and answer not found" });
//     }
//     res.status(200).json(qa);
//   } catch (err) {
//     res
//       .status(500)
//       .json({
//         error: "Failed to fetch question and answer",
//         message: err.message,
//       });
//   }
// };

// Update a question and answer by ID
exports.updateQA = async (req, res) => {
  const { id } = req.params;
  const { question, answer, isactive } = req.body; // Include all possible fields in request body

  try {
    // Prepare an object with the updated fields
    const updatedFields = {};

    // Add only the fields that are provided in the request body
    if (question) updatedFields.question = question;
    if (answer) updatedFields.answer = answer;
    if (isactive !== undefined) updatedFields.isactive = isactive;

    // Use findByIdAndUpdate to update the document (excluding createdAt, modifiedAt)
    const updatedQA = await QA.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    // Check if the document was found and updated
    if (!updatedQA) {
      return res.status(404).json({ error: "Question and answer not found" });
    }

    // Return the updated question and answer
    res.status(200).json(updatedQA);
  } catch (err) {
    res.status(500).json({
      error: "Failed to update question and answer",
      message: err.message,
    });
  }
};

// Delete a question and answer by ID
// exports.deleteQA = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedQA = await QA.findByIdAndDelete(id);
//     if (!deletedQA) {
//       return res.status(404).json({ error: "Question and answer not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Question and answer deleted successfully" });
//   } catch (err) {
//     res
//       .status(500)
//       .json({
//         error: "Failed to delete question and answer",
//         message: err.message,
//       });
//   }
// };
