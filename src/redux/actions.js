import {CREATE_TODO} from "./types";

export function AddNewTodo(todo) {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}