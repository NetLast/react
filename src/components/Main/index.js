import React from 'react';
import Form from "../Form";
import FetchButton from "../FetchButton";
import List from "../List";

import './style.css';

const Main = () => {
  return (
    <main className="todo">
      <Form />

      <FetchButton />

      <List />
    </main>
  )
}

export default Main;
