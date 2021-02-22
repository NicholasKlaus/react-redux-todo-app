import {CREATE_TODO} from './types';

const initialState = {
  todos: [
    {
      id: 1,
      value: "Start training with dumbbells",
      completed: false,
    },
    {
      id: 2,
      value: "Take the cat for vaccination",
      completed: false,
    },
    {
      id: 3,
      value: "Finish reading the book",
      completed: false,
    },
  ],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {...state, posts: [...state.posts, action.payload]}
    default: return state;
  }
}