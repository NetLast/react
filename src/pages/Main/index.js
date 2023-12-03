import React from "react";
import { useSelector } from "react-redux";

import Form from "../../components/Form";
import List from "../../components/List";

import "./style.css";

const Main = () => {
  const loading = useSelector((state) => {
    return state.loading;
  });

  return (
    <main className="todo">
      <Form />
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <List />
        )
      }
    </main>
  )
}

export default Main;
