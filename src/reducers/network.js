import { makeCreators, makeReducer } from './redux-utils';

// TODO: What about multiple network jobs

const initialState = {
  isFetching: false,
  lastUpdated: null,
  url: null,
};

const reducers = {
  request: (state, url) => ({
    ...state,
    isFetching: true,
    url,
  }),
  success: (state, lastUpdated) => ({
    ...state,
    isFetching: false,
    lastUpdated,
  }),
  failure: (state, error, lastUpdated) => ({
    ...state,
    lastUpdated,
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { request, success, failure } = creators;
export default reducer;
