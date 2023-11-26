import React from 'react';
import Item from "../Item";

import './style.css';

const todos = [
  {
    id: 1,
    title: 'Task number one',
    completed: false,
  }, {
    id: 2,
    title: 'Task number two',
    completed: true,
  }, {
    id: 3,
    title: 'Task number three',
    completed: false,
  }
]

const List = () => {
  return (
    <ul className="todo__list">
      { todos.map((todo) => {
        return (
          <Item key={todo.id} description={todo.title} completed={todo.completed} />
        )
      }) }
    </ul>
  )
}

export default List;
