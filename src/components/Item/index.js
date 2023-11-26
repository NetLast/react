import React from 'react';
import './style.css';

const Item = ({ description, completed }) => {
  return (
    <li className="todo__item">
      <input type="checkbox" className="todo__checkbox" checked={completed}/>
      <p className={completed ? 'done' : ''}>{description}</p>
      <button className="todo__remove remove">x</button>
    </li>
  )
}

export default Item;
