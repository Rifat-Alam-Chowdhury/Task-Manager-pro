import axios from "axios";
import React, { useState } from "react";

function SingleTodo({ list, refetch }) {
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
  return (
    <div className="border-2">
      {Edit ? (
        <>
          <input
            type="text"
            required
            defaultValue={list.todo}
            onChange={(e) => SetEditValue(e.target.value)}
          />
          <button onClick={Handlesave} className="btn ">
            save
          </button>
        </>
      ) : (
        <>
          <h1>{list.todo}</h1>{" "}
          <button onClick={() => setEdit(true)} className="btn ">
            edit
          </button>
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
