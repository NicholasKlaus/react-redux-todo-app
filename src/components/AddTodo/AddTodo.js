import React, {useState, useEffect} from 'react';
import {
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {AddNewTodo} from '../../redux/actions';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [item, setItem] = useState([]);
  const onCreate = (value) =>{
    setItem([...item, value]);
  }
  console.log(item);

  

  useEffect(() => {
    AddNewTodo(item);
  }, [item])

  return (
    <form className="new-todo" >
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Todo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={event => setInputValue(event.target.value)}
        />
        <Button
          variant="outline-success"
          onClick={() => onCreate({
            value: inputValue,
            id: Date.now(),
            completed: false
          })}
        >
          Add task
        </Button>
      </InputGroup>
    </form>
  );
}


const mapDispatchToProps = {
  AddNewTodo: AddNewTodo
}

export default connect(null, mapDispatchToProps)(AddTodo);