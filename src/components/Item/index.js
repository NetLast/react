import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onCheckboxToggleAction, onTodoDeleteAction } from "../../store/actions";

import "./style.css";

const Item = ({ id, description, completed }) => {
  const dispatch = useDispatch();

  const onCheckToggleHandler = () => {
    dispatch(onCheckboxToggleAction(id));
  }

  const onDeleteTodoHandler = () => {
    dispatch(onTodoDeleteAction(id));
  }

  return (
    <li className="todo__item">
      <input type="checkbox" className="todo__checkbox" checked={completed} onChange={onCheckToggleHandler} />
      <p className={completed ? 'done' : ''}><Link to={`/detail/${id}`}>{description}</Link></p>
      <button className="todo__remove remove" onClick={onDeleteTodoHandler}>x</button>
    </li>
  )
}

export default Item;
