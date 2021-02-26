import React from 'react';
import {Button, InputGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {toggleTodo, deleteTodo} from '../../redux/actions';

export const TodoItem = ({todo}) => {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  }
  const changeHandler = () => {
    dispatch(toggleTodo(todo.id));
  }
 
  return(
    <li className={`task-list__item ${(todo.completed === true) ? 'checked' : ''}`}>
      <div className='wrapper'>
        <InputGroup.Checkbox
          className="checkbox"
          aria-label="Checkbox for following text input"
          onChange={changeHandler}
          checked={todo.completed}
        />
        <div className='text-wrap'> {todo.title} </div>
      </div>
      <Button onClick={removeTodo} variant="outline-danger">&times;</Button>
    </li>
  );
}