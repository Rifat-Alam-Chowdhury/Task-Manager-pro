import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../FireBaseAuth/FirebaseAuth";
import SingleTodo from "./SingleTodo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

function ShowTodolists({ refetch: refetchs }) {
  const { currentUser } = useContext(AuthContext);
  const [LocalTodo, setLocalTodo] = useState([]);
  const {
    data: ALLTODO = [],
    isLoading: postsLoading,
    refetch,
  } = useQuery({
    queryKey: ["All-TODO"],
    queryFn: async () => {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}GETTODO?email=${currentUser?.uid}`
      );
      setLocalTodo(response.data);
      return response.data;
    },
  });
  console.log("old array", LocalTodo);

  if (refetchs) {
    refetch();
  }

  const reorder = (array, startindex, endindex) => {
    const result = Array.from(array);
    const [removed] = result.splice(startindex, 1);
    result.splice(endindex, 0, removed);
    return result;
  };

  const handleDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    // return console.log(
    //   "this is desti =>",
    //   destination,
    //   "this is source=>",
    //   source,
    //   "this is dragable=>",
    //   draggableId
    // );
    //eikhne api call dite
    console.log(
      source.index + 1,
      " <= eita uthay  ",
      destination.index + 1,
      " <=eitay bosailm"
    );

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return toast.warn("Nothing Changed!"); //change goy nai
    }

    if (destination.index !== source.index) {
      const newArray = reorder(LocalTodo, source.index, destination.index);
      toast.success("Shifted!");
      return setLocalTodo(newArray);
    }

    try {
      if (destination.droppableId !== source.droppableId) {
        await axios.put(`${import.meta.env.VITE_URL}edit-Status`, {
          id: draggableId,
          status: destination.droppableId,
        });
      }
      refetch();
      toast.success(`Task shifted ${destination.droppableId}!`, {
        duration: 4000,
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
    }
  };
  console.log("update array", LocalTodo);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="mt-5 w-11/12 mx-auto min-h-[80vh] flex flex-col md:flex-row gap-4 p-4">
        {/* To Do Column */}
        <Droppable droppableId="To-Do">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`flex-1 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg transition-all ${
                snapshot.isDraggingOver ? "bg-blue-100/50" : ""
              }`}
            >
              <div className="p-4">
                <h2 className="text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 rounded-t-xl shadow-md ">
                  To Do
                  <span className="ml-2 text-blue-100 text-sm font-normal">
                    ({ALLTODO?.filter((item) => item.status === "To-Do").length}
                    )
                  </span>
                </h2>
                <div className="mt-4 space-y-3 min-h-[200px] ">
                  {LocalTodo?.filter((item) => item.status === "To-Do").map(
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
                            className={` ${
                              snapshot.isDragging
                                ? "opacity-75 rotate-1"
                                : "opacity-100"
                            } transition-transform duration-200 `}
                            style={{
                              ...provided.draggableProps.style,
                              touchAction: "none",
                            }}
                          >
                            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md border-l-4  transition-all border-2 border-cyan-500">
                              <SingleTodo
                                list={list}
                                refetch={refetch}
                                index={index + 1}
                              />
                            </div>
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-blue-300 transition-opacity">
                              <Bars3BottomLeftIcon className="h-5 w-5" />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    )
                  )}
                  {provided.placeholder}
                </div>
              </div>
            </div>
          )}
        </Droppable>

        {/* In Progress Column */}
        <Droppable droppableId="In Progress">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`flex-1 bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl shadow-lg transition-all ${
                snapshot.isDraggingOver ? "bg-amber-100/50" : ""
              }`}
            >
              <div className="p-4">
                <h2 className="text-lg font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 rounded-t-xl shadow-md ">
                  In Progress
                  <span className="ml-2 text-amber-100 text-sm font-normal">
                    (
                    {
                      ALLTODO?.filter((item) => item.status === "In Progress")
                        .length
                    }
                    )
                  </span>
                </h2>
                <div className="mt-4 space-y-3 min-h-[200px]">
                  {LocalTodo?.filter(
                    (item) => item.status === "In Progress"
                  ).map((list, index) => (
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
                          className={` ${
                            snapshot.isDragging
                              ? "opacity-75 rotate-1"
                              : "opacity-100"
                          } transition-transform duration-200`}
                          style={{
                            ...provided.draggableProps.style,
                            touchAction: "none",
                          }}
                        >
                          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md border-l-4 border-amber-500 transition-all">
                            <SingleTodo
                              list={list}
                              refetch={refetch}
                              index={index + 1}
                            />
                          </div>
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-amber-300 transition-opacity">
                            <Bars3BottomLeftIcon className="h-5 w-5" />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            </div>
          )}
        </Droppable>

        {/* Done Column */}
        <Droppable droppableId="Done">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`flex-1 bg-gradient-to-b from-green-50 to-green-100 rounded-xl shadow-lg transition-all ${
                snapshot.isDraggingOver ? "bg-green-100/50" : ""
              }`}
            >
              <div className="p-4">
                <h2 className="text-lg font-bold text-white bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 rounded-t-xl shadow-md ">
                  Done
                  <span className="ml-2 text-green-100 text-sm font-normal">
                    ({ALLTODO?.filter((item) => item.status === "Done").length})
                  </span>
                </h2>
                <div className="mt-4 space-y-3 min-h-[200px]">
                  {LocalTodo?.filter((item) => item.status === "Done").map(
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
                            className={` ${
                              snapshot.isDragging
                                ? "opacity-75 rotate-1"
                                : "opacity-100"
                            } transition-transform duration-200`}
                            style={{
                              ...provided.draggableProps.style,
                              touchAction: "none",
                            }}
                          >
                            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md border-l-4 border-green-500 transition-all">
                              <SingleTodo
                                list={list}
                                refetch={refetch}
                                index={index + 1}
                              />
                            </div>
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-green-300 transition-opacity">
                              <Bars3BottomLeftIcon className="h-5 w-5" />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    )
                  )}
                  {provided.placeholder}
                </div>
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default ShowTodolists;
// <SingleTodo key={list._id} list={list} refetch={refetch} />
