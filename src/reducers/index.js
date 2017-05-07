import { combineReducers } from 'redux';
import { routerReducer as router } from 'redux-router-kit';
import network from './network';
import entities from './entities';

export default combineReducers({
  router,
  network,
  entities,
});
