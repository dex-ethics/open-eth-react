import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import reducers from '../reducers';

const { toggleTodo } = reducers;

const getOrderedTodos = state => state.todos.map(id => state.todosById[id]);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Invalid filter');
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(getOrderedTodos(state.app.todos), state.app.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
