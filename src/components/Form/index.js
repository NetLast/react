import React, { useState } from "react";
import "./style.css";

const Form = ({onSave}) => {
  const [ displayForm, setDisplayForm ] = useState(false);
  const [ todo, setTodo ] = useState('default todo');

  const addTodoHandler = () => {
    setDisplayForm(true);
  }

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  }

  const onCreateTodoHandler = (event) => {
    event.preventDefault();
    onSave(todo);
  }

  if (displayForm) {
    return (
      <form className="todo__container" onSubmit={onCreateTodoHandler}>
        <input type="text" className="todo__input" placeholder="Describe todo item" onChange={onChangeHandler} value={todo}/>
        <button type="submit" className="todo__add">+</button>
      </form>
    )
  }

  return (
    <button className="todo__add" onClick={addTodoHandler}>Add Todo</button>
  )
}

export default Form;
