import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
    <header className="header">
      <h1>Todo List</h1>
    </header>

    <main className="todo">
      <form className="todo__container" id="form">
        <input type="text" className="todo__input" placeholder="Describe todo item"/>
        <button type="submit" className="todo__add">+</button>
      </form>

      <button className="todo__fetch" id="fetch">Fetch All</button>

      <ul className="todo__list" id="list">
        <li className="todo__item">
          <input type="checkbox" className="todo__checkbox"/>
          <p>Task number one</p>
          <button className="todo__remove remove">x</button>
        </li>
        <li className="todo__item">
          <input type="checkbox" className="todo__checkbox"/>
          <p>Task number two</p>
          <button className="todo__remove remove">x</button>
        </li>
        <li className="todo__item">
          <input type="checkbox" className="todo__checkbox"/>
          <p>Task number three</p>
          <button className="todo__remove remove">x</button>
        </li>
      </ul>
    </main>
  </div>
  );
}

export default App;
