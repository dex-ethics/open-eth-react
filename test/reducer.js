import { expect } from 'chai';
import reducers from '../src/reducers';
import VisibilityFilters from '../src/visibility-filters';

const { reducer, addTodo, toggleTodo, setVisibilityFilter } = reducers;

describe('Reducer', () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  const dispatch = (action) => {
    if (Array.isArray(action)) {
      state = action.reduce(reducer, state);
    } else {
      state = reducer(state, action);
    }
  };

  it('should have inititialState', () => {
    expect(state).to.deep.equal({
      visibilityFilter: 'SHOW_ALL',
      todos: {
        nextTodoId: 0,
        todosById: {},
        todos: [],
      },
    });
  });
  it('should set the visibility filter', () => {
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    expect(state).to.have.property('visibilityFilter', 'SHOW_ACTIVE');
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
    expect(state).to.have.property('visibilityFilter', 'SHOW_COMPLETED');
  });
  it('should add todos', () => {
    dispatch([addTodo('first'), addTodo('second'), addTodo('third')]);
    expect(state).to.have.property('todos').and.to.deep.equal({
      nextTodoId: 3,
      todosById: {
        0: { completed: false, id: 0, text: 'first' },
        1: { completed: false, id: 1, text: 'second' },
        2: { completed: false, id: 2, text: 'third' },
      },
      todos: [0, 1, 2],
    });
  });
  it('should toggle todos', () => {
    dispatch([addTodo('first'), addTodo('second'), addTodo('third'), toggleTodo(1)]);
    expect(state).to.have.property('todos').and.to.deep.equal({
      nextTodoId: 3,
      todosById: {
        0: { completed: false, id: 0, text: 'first' },
        1: { completed: true, id: 1, text: 'second' },
        2: { completed: false, id: 2, text: 'third' },
      },
      todos: [0, 1, 2],
    });
  });
});
