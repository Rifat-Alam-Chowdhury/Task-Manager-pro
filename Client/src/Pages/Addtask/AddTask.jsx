import React, { useContext, useState } from "react";

import axios from "axios";
import ShowTodolists from "../ShowTodo/ShowTodolists";
import { AuthContext } from "../../FireBaseAuth/FirebaseAuth";
import toast from "react-hot-toast";

function AddTask() {
  const { currentUser } = useContext(AuthContext);
  const [refetch, setrefetch] = useState(false);
  const [loading, Setloading] = useState(false);
  const [todo, setTodo] = useState({
    Title: "",
    user: currentUser.uid,
    status: "To-Do",
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      Title: e.target.value,
    }));
  };

  const UpdateTodo = async () => {
    if (todo.Title.trim() === "") {
      toast.error("Task description cannot be empty.");
      return;
    }
    Setloading(true);

    try {
      const ADDTODO = await axios.post(`${import.meta.env.VITE_URL}AddTODO`, {
        todo,
      });

      if (ADDTODO.status === 201) {
        setrefetch(true);
        toast.success("Task added");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTodo({
        ...todo,
        Title: "",
      });
      Setloading(false);
    }
  };
  return (
    <>
      <div className=" mt-20 bg-white rounded-xl shadow-lg p-6 mb-8 transition-all hover:shadow-xl max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Task
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            onChange={handleChange}
            value={todo.Title}
            required
            maxLength={50}
            placeholder="Enter task description..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          />
          <button
            onClick={UpdateTodo}
            className={`${
              loading
                ? "animate-ping bg-red-400 px-6 py-3 rounded-lg font-semibold "
                : "bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-red-600 transition-colors shadow-md"
            }`}
          >
            Add Task
          </button>
        </div>
      </div>
      <ShowTodolists refetch={refetch} />
    </>
  );
}

export default AddTask;
