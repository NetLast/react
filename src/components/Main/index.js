import React, { useState } from "react";
import Form from "../Form";
import FetchButton from "../FetchButton";
import List from "../List";

import './style.css';

const todosDefault = [
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

const Main = () => {
  const [todos, setTodos] = useState(todosDefault);

  const onSaveHandler = (value) => {
    const item = {
      id: todos.length + 1,
      title: value,
      completed: false
    }

    setTodos((prevState) => {
      const newTodos = [...prevState];
      newTodos.push(item);

      return newTodos;
    });
  }

  const onCheckToggleById = (id) => {
    setTodos((prevState) => {
      const newTodos = [...prevState];

      return newTodos.map((item) => item.id === id ? ({...item, completed: !item.completed}) : item );
    });
  }

  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      const newTodos = [...prevState];

      return newTodos.filter((item) => item.id !==  id);
    });
  }

  return (
    <main className="todo">
      <Form onSave={onSaveHandler} />

      <FetchButton />

      <List todos={todos} onCheckToggleById={onCheckToggleById} onDeleteTodoById={onDeleteTodoById} />
    </main>
  )
}

export default Main;
