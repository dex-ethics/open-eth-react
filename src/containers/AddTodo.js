import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodo } from '../reducers/todos';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onAddTodo: (text) => {
    dispatch(addTodo(text));
  },
});

const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
