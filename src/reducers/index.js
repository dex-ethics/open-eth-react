import { combineHandlers, reduxExports } from './redux-utils';
import todos from './todos';
import visibilityFilter from './visibility-filter';

export default reduxExports(
  combineHandlers({
    visibilityFilter,
    todos,
  })
);
