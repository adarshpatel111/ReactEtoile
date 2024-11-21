const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const QueAnsRouter = require("./router/questionAnswerRouter.js");
require("dotenv").config();
const app = express();

app.use(express.json());

const FRONTEND_URL = process.env.FRONTEND_URL;
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const corsOptions = {
  origin: [FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if DB connection fails
  });
  
// Define a route
app.get("/qa", (req, res) => {
  res.send("Hello, World!");
});
app.use("/", QueAnsRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
