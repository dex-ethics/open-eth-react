import { makeCreators, makeReducer } from './redux-utils';

const handlers = {
  initialState: {
    nextTodoId: 0,
    todosById: {},
    todos: [],
  },
  addTodo: (state, text) => ({
    ...state,
    nextTodoId: state.nextTodoId + 1,
    todosById: {
      ...state.todosById,
      [state.nextTodoId]: {
        id: state.nextTodoId,
        text,
        completed: false,
      },
    },
    todos: [...state.todos, state.nextTodoId],
  }),
  toggleTodo: (state, id) => ({
    ...state,
    todosById: {
      ...state.todosById,
      [id]: {
        ...state.todosById[id],
        completed: !state.todosById[id].completed,
      },
    },
  }),
};

export const creators = makeCreators(handlers);
export const addTodo = creators.addTodo;
export const toggleTodo = creators.toggleTodo;
export const reducer = makeReducer(handlers);
export default reducer;
