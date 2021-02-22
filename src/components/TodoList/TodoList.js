import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import {connect} from 'react-redux';


const TodoList = ({mytodos}) => {

  return(
    <div className="task-list">
      {
        mytodos.map(todo => <TodoItem  todo={todo} key={todo.id} />)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mytodos: state.todos.todos
  };
}

export default connect(mapStateToProps, null)(TodoList);