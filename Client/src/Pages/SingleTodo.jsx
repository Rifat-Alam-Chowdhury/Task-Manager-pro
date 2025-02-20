import axios from "axios";
import React, { useState } from "react";

function SingleTodo({ list, refetch }) {
  console.log(list);

  const [Edit, setEdit] = useState(false);
  const [EditValue, SetEditValue] = useState("");
  const HandleDelete = async (e) => {
    const deleteTodo = await axios.delete(
      `${import.meta.env.VITE_URL}Delete-Todo?id=${list._id}`
    );

    if (deleteTodo.status === 200) {
      refetch();
    }
  };

  const Handlesave = async () => {
    if (EditValue.trim() === "") {
      alert("no changes made");
      return;
    }
    const edit = await axios.patch(`${import.meta.env.VITE_URL}Edit-Todo`, {
      Todo: EditValue,
      id: list._id,
    });

    if (edit.status === 200) {
      refetch();
    }

    setEdit(false);
  };
  const status = list?.todo?.status;
  const handleStatusClick = async (newStatus) => {
    console.log("Status selected:", newStatus, list._id);
    const ChangeStatus = await axios.put(
      `${import.meta.env.VITE_URL}edit-Status`,
      {
        id: list._id,
        status: newStatus,
      }
    );
    console.log(ChangeStatus);
    if (ChangeStatus.status === 200) {
      refetch();
    }
  };
  return (
    <div className="border-2 m-4 ">
      {Edit ? (
        <>
          <input
            type="text"
            required
            defaultValue={list.Title}
            onChange={(e) => SetEditValue(e.target.value)}
          />
          <button onClick={Handlesave} className="btn ">
            save
          </button>
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <h1>{list?.todo?.Title}</h1>
            <h1>{list?.todo?.createdAt}</h1>
            <button
              onClick={() => handleStatusClick("To-Do")}
              className={`btn ${
                status === "To-Do" ? "bg-red-500" : "bg-white"
              }`}
            >
              To-Do
            </button>
            <button
              onClick={() => handleStatusClick("In Progress")}
              className={`btn ${
                status === "In Progress" ? "bg-green-500" : "bg-white"
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => handleStatusClick("Done")}
              className={`btn ${
                status === "Done" ? "bg-yellow-500" : "bg-white"
              }`}
            >
              Done
            </button>
            <button onClick={() => setEdit(true)} className="btn ">
              edit
            </button>
          </div>
        </>
      )}
      <h1>{list._id}</h1>
      <button onClick={HandleDelete} className="btn bg-red-500">
        delete
      </button>
    </div>
  );
}

export default SingleTodo;
