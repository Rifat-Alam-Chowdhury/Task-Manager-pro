import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function SingleTodo({ list, refetch, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(list.title);
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_URL}Delete-Todo?id=${list._id}`
      );
      toast.success("Deleted!");
      queryClient.invalidateQueries(["All-TODO"]);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleSave = async () => {
    if (editValue.trim() === "") return;

    try {
      await axios.patch(`${import.meta.env.VITE_URL}Edit-Todo`, {
        Todo: editValue,
        id: list._id,
      });
      queryClient.invalidateQueries(["All-TODO"]);
      setIsEditing(false);
      toast.success("Edited!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="  bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-yellow-500">
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-yellow-600 hover:to-red-600 transition-colors flex items-center gap-1"
          >
            <CheckIcon className="h-5 w-5" />
            Save
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          <h1 className="text-gray-800 font-medium truncate text-lg">
            {list.title}
          </h1>

          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-600 hover:text-yellow-700 transition-colors p-2 rounded-full hover:bg-yellow-50"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className=" flex justify-between items-center">
        <span className="text-red-400 font-semibold">
          {" "}
          {new Date(list.createdAt).toLocaleString()}
        </span>

        <button
          onClick={handleDelete}
          className="mt-2 ml-auto px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md text-sm hover:shadow-md transition-all flex items-center gap-1"
        >
          <TrashIcon className="h-4 w-4" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(SingleTodo);
