import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemDetails = () => {
  const { id } = useParams();

  const todoItem = useSelector((state) => {
    return state.todos.find((todo) => todo.id == id);
  });

  return (
    <>
      <h2>Item Details</h2>
      <p>Id: {todoItem?.id}</p>
      <p>Description: {todoItem?.title}</p>
      <p>Completed: {todoItem?.completed.toString()}</p>
    </>
  );
}

export default ItemDetails;
