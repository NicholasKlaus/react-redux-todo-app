import React, {useState} from 'react';
import {
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {AddNewTodo, showAlert} from '../../redux/actions';
import {Alert} from '../Alert/Alert';

const AddTodo = ({AddNewTodo, showAlert, alert}) => {
  const [inputValue, setInputValue] = useState('');

  const onCreate = () => {
    
    if (!inputValue.trim()){
      return showAlert('You cannot add an empty string');
    }

    const newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false
    }
    AddNewTodo(newTodo);
    setInputValue("");
  }

  return (
    <div className="new-todo">
      {alert && <Alert text={alert} />}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">Todo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <Button variant="outline-success" onClick={onCreate}>
          Add task
        </Button>
      </InputGroup>
    </div>
  );
}

const mapDispatchToProps = {
  AddNewTodo,
  showAlert 
}

const mapStateToProps = (state) => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);