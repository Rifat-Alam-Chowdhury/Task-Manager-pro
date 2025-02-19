require("dotenv").config();
const express = require("express");
const { connectDB } = require("./DATABSE");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB()
  .then((DB) => {
    app.get("/", (req, res) => {
      res.send("Hello");
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
