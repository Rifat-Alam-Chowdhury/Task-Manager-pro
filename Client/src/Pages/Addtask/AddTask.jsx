import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowTodolists from "../ShowTodo/ShowTodolists";
import { AuthContext } from "../../FireBaseAuth/FirebaseAuth";

function AddTask() {
  const { currentUser } = useContext(AuthContext);
  const [refetch, setrefetch] = useState(false);
  const [todo, setTodo] = useState({
    Title: "",
    user: currentUser.uid,
    status: "",
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      Title: e.target.value,
    }));
  };
  const handleStatusChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      status: e.target.value,
    }));
  };

  const UpdateTodo = async () => {
    console.log("Todo Text:", todo);

    const ADDTODO = await axios.post(`${import.meta.env.VITE_URL}AddTODO`, {
      todo,
    });
    if (ADDTODO.status === 201) {
      setTodo({
        ...todo,
        Title: "",
      });
      setrefetch(true);
    }
  };
  return (
    <>
      <div className="border-2 border-green-300 mt-10 flex justify-center items-center ">
        <div className="mx-auto border-2 border-red-400">
          <h1 className="text-lg font-semibold">Add Todo</h1>
          <div className="flex justify-between gap-5">
            <input
              type="text"
              onChange={handleChange}
              value={todo.Title}
              className="border p-2 w-full rounded-md"
            />
            <select
              onChange={handleStatusChange}
              value={todo.status}
              className="border p-2 rounded-md"
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button onClick={UpdateTodo} className="btn">
              Add
            </button>
          </div>
        </div>
      </div>
      <ShowTodolists refetch={refetch} />
    </>
  );
}

export default AddTask;
