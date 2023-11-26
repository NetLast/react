import React from "react";
import Item from "../Item";

import "./style.css";

const List = ({todos, onCheckToggleById, onDeleteTodoById}) => {

  return (
    <ul className="todo__list">
      { todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            description={todo.title}
            completed={todo.completed}
            onCheckToggle={() => onCheckToggleById(todo.id)}
            deleteTodo={() => onDeleteTodoById(todo.id)}
          />
        )
      }) }
    </ul>
  )
}

export default List;
