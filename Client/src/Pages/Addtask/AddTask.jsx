import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowTodolists from "../ShowTodo/ShowTodolists";

function AddTask() {
  const [todo, setTodo] = useState("");
  const [refetch, setrefetch] = useState(false);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const UpdateTodo = async () => {
    console.log("Todo Text:", todo);

    const ADDTODO = await axios.post(`${import.meta.env.VITE_URL}AddTODO`, {
      todo,
    });
    if (ADDTODO.status === 201) {
      setTodo("");
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
              value={todo}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
            />
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
