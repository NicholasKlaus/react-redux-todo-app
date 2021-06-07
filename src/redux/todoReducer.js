import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

const initialState = {
  todos: [
    {
      id: 1,
      title: "Start training with dumbbells",
      completed: false,
    },
    {
      id: 2,
      title: "Take the cat for vaccination",
      completed: false,
    },
    {
      id: 3,
      title: "Finish reading the book",
      completed: false,
    },
  ],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {...state, todos: [...state.todos, action.payload]}
    case TOGGLE_TODO:
      return {
        ...state, todos: [...state.todos.map((todo) => {
          if(todo.id === action.payload){
            todo.completed = !todo.completed;
          }
          return todo;
        })]
      }
    case DELETE_TODO:
      return {
        ...state, todos: [...state.todos.filter(todo => todo.id != action.payload)]
      }
    default: return state;
  }
}