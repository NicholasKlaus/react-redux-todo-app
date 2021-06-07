import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
  app: appReducer
})