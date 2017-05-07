import { makeCreators, makeReducer } from './redux-utils';
import VisibilityFilters from '../visibility-filters';

const handlers = {
  initialState: VisibilityFilters.SHOW_ALL,
  setVisibilityFilter: (state, filter) => filter,
};

export const creators = makeCreators(handlers);
export const setVisibilityFilter = creators.setVisibilityFilter;
export const reducer = makeReducer(handlers);
export default reducer;
