import { createStore } from "redux";

const initialState = {
  loading: false,
  todos: []
}

const reducer = (state = initialState, action) => {
  if(action.type === "create-todo") {
    const item = {
      id: state.todos.length + 1,
      title: action.payload,
      completed: false
    }

    return {
      ...state,
      todos: [...state.todos, item]
    }
  }

  if (action.type === "checkbox-toggle") {
    const id = action.payload;
    return  {
      ...state,
      todos: [...state.todos].map((item) => item.id === id ? ({...item, completed: !item.completed}) : item )
    }
  }

  if (action.type === "delete-todo") {
    const id = action.payload;
    return {
      ...state,
      todos: [...state.todos].filter((item) => item.id !==  id)
    }
  }

  if (action.type === "fetch-todos-success") {
    return {
      ...state,
      todos: action.payload
    }
  }

  if (action.type === "fetch-todos-loading") {
    return {
      ...state,
      loading: action.payload
    }
  }

  return state;
}

const store = createStore(reducer);

export default store;
