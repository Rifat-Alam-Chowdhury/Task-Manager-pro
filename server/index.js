require("dotenv").config();
const express = require("express");
const { connectDB } = require("./DATABSE");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { ObjectId } = require("mongodb");
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
connectDB()
  .then((DB) => {
    app.get("/", async (req, res) => {
      // const dlt = await DB.collection("To-Do").deleteMany({});
      // console.log(dlt);

      res.json("Hello from api");
    });

    //user save
    app.post("/users", async (req, res) => {
      try {
        const userData = req.body;
        const { uid, email, displayName } = userData;

        const existingUser = await DB.collection("users").findOne({ uid });

        if (existingUser) {
          return res.status(201).json({ message: "User already exists" });
        }

        const newUser = await DB.collection("users").insertOne(userData);

        return res.status(201).json({ message: "User created" });
      } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // add todo
    app.post("/AddTODO", async (req, res) => {
      const { todo } = req.body;
      const { Title, user, status, createdAt } = todo;

      try {
        let No = 1;
        const finduserfirst = await DB.collection("To-Do")
          .find({
            user: user,
          })
          .toArray();
        console.log(finduserfirst.length);
        if (finduserfirst.length > 0) {
          No = finduserfirst.length + 1;
        }

        const ADDTODO = await DB.collection("To-Do").insertOne({
          title: Title,
          user: user,
          status: status,
          createdAt: createdAt,
          No: No,
        });
        return res.status(201).json({ message: "TODO ADDED" });
      } catch (error) {
        console.log(error);
      }
    });
    //get todo
    app.post("/GETTODO", async (req, res) => {
      const { email } = req.query;

      try {
        const GETallTody = await DB.collection("To-Do")
          .find({ user: email })
          .toArray();

        return res.status(200).json(GETallTody);
      } catch (error) {
        console.log(error);
      }
    });

    //edit todo
    app.patch("/Edit-Todo", async (req, res) => {
      const { Todo, id } = req.body;

      try {
        const editTodo = await DB.collection("To-Do").updateOne(
          { _id: new ObjectId(id) },
          { $set: { title: Todo } }
        );

        if (editTodo.modifiedCount === 0) {
          return res.status(400).json({ message: "No changes made." });
        }

        return res.status(200).json({ message: "Todo updated successfully." });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error updating todo." });
      }
    });
    //delete todo
    app.delete("/Delete-Todo", async (req, res) => {
      const { id } = req.query;

      try {
        const deleteTodo = await DB.collection("To-Do").deleteOne({
          _id: new ObjectId(id),
        });

        if (deleteTodo.deletedCount === 0) {
          return res.status(400).json({ message: " Something went wrong" });
        }

        return res.status(200).json({ message: "Todo deleted successfully." });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error deleting todo." });
      }
    });

    //status change
    app.put("/edit-Status", async (req, res) => {
      const { status, id } = req.body;

      try {
        const editstatus = await DB.collection("To-Do").updateOne(
          { _id: new ObjectId(id) },
          { $set: { status: status } }
        );

        if (editstatus.modifiedCount === 0) {
          return res.status(400).json({ message: "No changes made." });
        }

        return res
          .status(200)
          .json({ message: "Status updated successfully." });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error updating todo." });
      }
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
