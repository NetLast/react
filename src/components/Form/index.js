import React from 'react';
import './style.css';

const Form = () => {
  return (
    <form className="todo__container">
      <input type="text" className="todo__input" placeholder="Describe todo item"/>
      <button type="submit" className="todo__add">+</button>
    </form>
  )
}

export default Form;
