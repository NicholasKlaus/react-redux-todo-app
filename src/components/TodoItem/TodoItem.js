import React from 'react';
import {Button, InputGroup} from 'react-bootstrap';

const TodoItem = ({todo}) => {

  return(
    <li className="task-list__item">
      <div className='wrapper'>
        <InputGroup.Checkbox
          className="checkbox"
          aria-label="Checkbox for following text input"
        />
        <div className='text-wrap'> {todo.value} </div>
      </div>
      <Button variant="outline-danger">&times;</Button>
    </li>
  );
}

export default TodoItem;
