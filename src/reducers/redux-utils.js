const makeCreator = action => (...args) => ({
  type: action,
  payload: args,
});

export const makeCreators = handlers =>
  Object.keys(handlers)
    .filter(label => label !== 'initialState')
    .reduce((a, b) => ({ [b]: makeCreator(b), ...a }), {});

export const makeReducer = (reducers, initialState) => (state = initialState, action) =>
  reducers[action.type] ? reducers[action.type](state, ...action.payload) : state;
