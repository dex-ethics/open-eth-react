import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import reducers from '../reducers';

// FIXME: Why does a deconstructor work, but not import?
const { addTodo } = reducers;

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onAddTodo: (text) => {
    dispatch(addTodo(text));
  },
});

const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
