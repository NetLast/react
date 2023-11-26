import React from "react";
import "./App.css";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Todo List</h1>
      </header>

      <Main />

    </div>
  );
}

export default App;
