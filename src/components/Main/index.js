import React, { useState, useEffect } from "react";
import Form from "../Form";
import List from "../List";

import "./style.css";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://run.mocky.io/v3/b39874f6-e60f-488f-b5f1-540db082f358', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    }).then((data) => {
      setTodos(data);
      setLoading(false);
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }, []);

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

      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <List todos={todos} onCheckToggleById={onCheckToggleById} onDeleteTodoById={onDeleteTodoById} />
        )
      }
    </main>
  )
}

export default Main;
