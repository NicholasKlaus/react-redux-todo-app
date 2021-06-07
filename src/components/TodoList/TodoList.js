import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const mytodos = useSelector(state => state.todos.todos);

  return(
    <div className="task-list">
      { mytodos.map(todo => <TodoItem  todo={todo} key={todo.id} />) }
    </div>
  );
}