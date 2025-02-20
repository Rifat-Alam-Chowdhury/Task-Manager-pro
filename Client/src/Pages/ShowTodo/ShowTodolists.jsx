import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import SingleTodo from "../SingleTodo";

function ShowTodolists({ refetch: refetchs }) {
  const {
    data: ALLTODO = [],
    isLoading: postsLoading,
    refetch,
  } = useQuery({
    queryKey: ["All-TODO"],
    queryFn: async () => {
      const data = await axios.post(`${import.meta.env.VITE_URL}GETTODO`);
      return data.data;
    },
  });
  console.log(ALLTODO);

  if (refetchs) {
    refetch();
  }

  const HandleDelete = async (e) => {
    console.log(e);

    const edit = await axios.patch(`${import.meta.env.VITE_URL}Edit-Todo`, {
      Todo: EditedTodo,
    });
  };

  return (
    <>
      <div className="mt-5">
        {ALLTODO?.map((list) => (
          <>
            <SingleTodo refetch={refetch} key={list._id} list={list} />
          </>
        ))}
      </div>
    </>
  );
}

export default ShowTodolists;
