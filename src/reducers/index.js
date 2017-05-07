import { combineReducers } from 'redux';
import { routerReducer } from 'redux-router-kit';
import todos from './todos';
import visibilityFilter from './visibility-filter';

export default combineReducers({
  router: routerReducer,
  visibilityFilter,
  todos,
});
