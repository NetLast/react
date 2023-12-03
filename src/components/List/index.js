import React from "react";
import { useSelector } from "react-redux";

import Item from "../Item";

import "./style.css";

const List = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <ul className="todo__list">
      { todos.map((todo) => {
        return (
          <Item
            id={todo.id}
            key={todo.id}
            description={todo.title}
            completed={todo.completed}
          />
        )
      }) }
    </ul>
  )
}

export default List;
