import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';


export const TodoApp = () => {

  return(
    <div className="todoapp">
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}