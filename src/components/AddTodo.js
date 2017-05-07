import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  valueChanged(value) {
    this.setState({ value });
  }

  buttonClick() {
    this.setState({ value: '' });
    this.props.onAddTodo(this.state.value);
  }

  render() {
    return (
      <div>
        <TextField
          id="add-todo"
          value={this.state.value}
          floatingLabelText="Add new todo entry"
          hintText="Buy milk"
          onChange={(e, v) => this.valueChanged(v)}
        />
        <FlatButton label="Add Todo" primary onClick={() => this.buttonClick()} />
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
