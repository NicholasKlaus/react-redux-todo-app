import {CREATE_TODO, HIDE_ALERT, SHOW_ALERT, TOGGLE_TODO, DELETE_TODO} from "./types";

export const AddNewTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export const showAlert = (text) => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000);
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload : id
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}