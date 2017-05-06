import { combineReducers } from 'redux';
import { routerReducer } from 'redux-router-kit';

export default combineReducers({
  router: routerReducer,
});
