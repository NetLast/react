import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import Main from "./pages/Main";
import ItemDetails from "./pages/ItemDetails";
import { onTodosFetchSuccessAction, onLoadingAction } from "./store/actions";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/detail/:id", element: <ItemDetails/> }
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadingAction(true));

    fetch('https://run.mocky.io/v3/b39874f6-e60f-488f-b5f1-540db082f358', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    }).then((data) => {
      dispatch(onTodosFetchSuccessAction(data));
      dispatch(onLoadingAction(false));
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Todo List</h1>
      </header>

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
