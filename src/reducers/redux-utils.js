// const makeLabels = handlers => Object.keys(handlers).reduce((a, b) => ({ [b]: b, ...a }), {});

// TODO: Throw error on duplicate key
const objectReducer = (a, b) => ({ ...a, ...b });

export const combineHandlers = slices =>
  Object.keys(slices)
    .map(slice =>
      Object.keys(slices[slice])
        .filter(label => label !== 'initialState')
        .map(handler => ({
          [handler]: (state, ...args) => ({
            ...state,
            [slice]: slices[slice][handler](state[slice], ...args),
          }),
        }))
        .reduce(objectReducer, {})
    )
    .reduce(objectReducer, {
      initialState: Object.keys(slices)
        .map(slice => ({ [slice]: slices[slice].initialState }))
        .reduce(objectReducer, {}),
    });

export const makeCreator = action => (...args) => ({
  type: action,
  payload: args,
});

export const makeCreators = handlers =>
  Object.keys(handlers)
    .filter(label => label !== 'initialState')
    .reduce((a, b) => ({ [b]: makeCreator(b), ...a }), {});

export const makeReducer = handlers => (state = handlers.initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, ...action.payload) : state;

export const reduxExports = handlers => ({
  reducer: makeReducer(handlers),
  ...makeCreators(handlers),
});
