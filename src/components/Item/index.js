import React from "react";
import "./style.css";

const Item = ({ description, completed, onCheckToggle, deleteTodo }) => {
  return (
    <li className="todo__item">
      <input type="checkbox" className="todo__checkbox" checked={completed} onChange={onCheckToggle} />
      <p className={completed ? 'done' : ''}>{description}</p>
      <button className="todo__remove remove" onClick={deleteTodo}>x</button>
    </li>
  )
}

export default Item;
