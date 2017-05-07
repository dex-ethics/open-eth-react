import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Todo = ({ text, completed, onClick }) => (
  <ListItem
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
    leftCheckbox={<Checkbox checked={completed} onCheck={onClick} />}
    primaryText={text}
  />
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
