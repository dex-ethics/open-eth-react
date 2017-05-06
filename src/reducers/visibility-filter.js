import VisibilityFilters from '../visibility-filters';

export default {
  initialState: VisibilityFilters.SHOW_ALL,
  setVisibilityFilter: (state, filter) => filter,
};
