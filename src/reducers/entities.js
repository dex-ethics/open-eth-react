import { makeCreators, makeReducer } from './redux-utils';

// TODO: Don't merge id only

const objectReduce = reducer => (a = {}, b = {}) =>
  Object.keys({ ...a, ...b })
    .map(key => ({ [key]: reducer(a[key], b[key]) }))
    .reduce((c, d) => ({ ...c, ...d }), {});

const preferDefined = next => (a, b) => {
  if (a === undefined) return b;
  if (b === undefined) return a;
  return next(a, b);
};

// const mergeRight = (a, b) => ({ ...a, ...b });
const takeRight = (a, b) => b;

// Reduces two instances of an entity
const entityReduce = preferDefined(takeRight);

// Reduces maps of id → entity
const entitiesReduce = objectReduce(entityReduce);

// Reduces maps of kind → id → enity
const kindReduce = objectReduce(preferDefined(entitiesReduce));

const initialState = {
  dilemmas: {},
  cases: {},
};

const reducers = {
  update: (state, data) => kindReduce(state, data),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { update } = creators;
export default reducer;
