// routes/qaRoutes.js
const express = require("express");
const QueAnsRouter = express.Router();
const qaController = require("../controllers/questionAnswercontroller.js");

// Define the routes and link them to controller functions
QueAnsRouter.get("/", qaController.getAllQA); // Get all questions and answers
QueAnsRouter.put("/:id", qaController.updateQA); // Update a question and answer by ID

module.exports = QueAnsRouter;
