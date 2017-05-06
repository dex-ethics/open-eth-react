import { combineHandlers, reduxExports } from './redux-utils';

const actions = reduxExports(combineHandlers({}));

export default {
  ...actions,
};
