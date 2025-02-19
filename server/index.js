require("dotenv").config();
const express = require("express");
const { connectDB } = require("./DATABSE");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
connectDB()
  .then((DB) => {
    app.get("/", (req, res) => {
      res.json("Hello from api");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      " Failed to start server due to MongoDB connection error:",
      err
    );
  });
