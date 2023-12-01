import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Item = ({ id, description, completed, onCheckToggle, deleteTodo }) => {
  return (
    <li className="todo__item">
      <input type="checkbox" className="todo__checkbox" checked={completed} onChange={onCheckToggle} />
      <p className={completed ? 'done' : ''}><Link to={`/detail/${id}`}>{description}</Link></p>
      <button className="todo__remove remove" onClick={deleteTodo}>x</button>
    </li>
  )
}

export default Item;
