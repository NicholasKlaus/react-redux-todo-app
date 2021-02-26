import React from 'react';
import {Button, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../../redux/actions';

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {

  return(
    <li className={`task-list__item ${(todo.completed === true) ? 'checked' : ''}`}>
      <div className='wrapper'>
        <InputGroup.Checkbox
          className="checkbox"
          aria-label="Checkbox for following text input"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.completed}
        />
        <div className='text-wrap'> {todo.title} </div>
      </div>
      <Button onClick={() => deleteTodo(todo.id)} variant="outline-danger">&times;</Button>
    </li>
  );
}

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoItem);
