import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import ItemDetails from "./pages/ItemDetails";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/detail/:id", element: <ItemDetails/> }
]);

const App = () => {
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
