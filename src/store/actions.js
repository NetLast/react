export const onTodoCreateAction = (text) => {
  return {
    type: "create-todo",
    payload: text
  }
}

export const onCheckboxToggleAction = (id) => {
  return {
    type: "checkbox-toggle",
    payload: id
  }
}

export const onTodoDeleteAction = (id) => {
  return {
    type: "delete-todo",
    payload: id
  }
}

export const onTodosFetchSuccessAction = (todos) => {
  return {
    type: "fetch-todos-success",
    payload: todos
  }
}

export const onLoadingAction = (loading) => {
  return {
    type: "fetch-todos-loading",
    payload: loading
  }
}
