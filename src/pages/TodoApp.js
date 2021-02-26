import React from 'react';
import {AddTodo} from '../components/AddTodo/AddTodo';
import { Header } from '../components/header/header';
import {TodoList} from '../components/TodoList/TodoList';


export const TodoApp = () => {

  return(
    <div className="todoapp">
      <Header />
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}