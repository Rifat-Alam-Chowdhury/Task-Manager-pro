import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../FireBaseAuth/FirebaseAuth";
import SingleTodo from "./SingleTodo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ShowTodolists({ refetch: refetchs }) {
  const { currentUser } = useContext(AuthContext);
  const {
    data: ALLTODO = [],
    isLoading: postsLoading,
    refetch,
  } = useQuery({
    queryKey: ["All-TODO"],
    queryFn: async () => {
      const data = await axios.post(
        `${import.meta.env.VITE_URL}GETTODO?email=${currentUser?.uid}`
      );
      return data.data;
    },
  });

  if (refetchs) {
    refetch();
  }

  console.log(ALLTODO);

  //
  const handleDragEnd = async (result) => {
    return console.log(result); //eikhne api call dite hobe
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="mt-5 border-4 border-pink-500 w-11/12 mx-auto min-h-screen flex gap-5 justify-between">
        <Droppable droppableId="To-Do">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="border-2 flex flex-col bg-red-500"
            >
              <h2 className="bg-red-400 p-2 sticky top-0">To Do</h2>
              <div className="overflow-y-auto flex-1">
                {ALLTODO?.filter((item) => item.status === "To-Do").map(
                  (list, index) => (
                    <Draggable
                      key={list._id}
                      draggableId={list._id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-1"
                          style={{
                            ...provided.draggableProps.style,
                            touchAction: "none",
                          }}
                        >
                          <SingleTodo list={list} refetch={refetch} />
                        </div>
                      )}
                    </Draggable>
                  )
                )}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="In Progress">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="border-2  flex flex-col"
            >
              <h2 className="bg-red-400 p-2 sticky top-0">In Progress</h2>
              <div className="overflow-y-auto flex-1">
                {ALLTODO?.filter((item) => item.status === "In Progress").map(
                  (list, index) => (
                    <Draggable
                      key={list._id}
                      draggableId={list._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2"
                        >
                          <SingleTodo list={list} refetch={refetch} />
                        </div>
                      )}
                    </Draggable>
                  )
                )}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="Done">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="border-2  flex flex-col"
            >
              <h2 className="bg-red-400 p-2 sticky top-0">Done</h2>
              <div className="overflow-y-auto flex-1">
                {ALLTODO?.filter((item) => item.status === "Done").map(
                  (list, index) => (
                    <Draggable
                      key={list._id}
                      draggableId={list._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2"
                        >
                          <SingleTodo list={list} refetch={refetch} />
                        </div>
                      )}
                    </Draggable>
                  )
                )}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default ShowTodolists;
// <SingleTodo key={list._id} list={list} refetch={refetch} />
