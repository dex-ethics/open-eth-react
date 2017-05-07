import { expect } from 'chai';
import reducer from '../src/reducers';

describe('Reducer', () => {
  let state;
  let routerInitial;

  beforeEach(() => {
    state = reducer(undefined, {});
    routerInitial = state.router;
  });

  const dispatch = (action) => {
    if (Array.isArray(action)) {
      state = action.reduce(reducer, state);
    } else {
      state = reducer(state, action);
    }
  };

  it('should have inititialState', () => {
    expect(state).to.deep.equal({
      router: routerInitial,
      entities: {
        cases: {},
        dilemmas: {},
      },
      network: {
        isFetching: false,
        lastUpdated: null,
        url: null,
      },
    });
  });
  it('should accept NOP', () => {
    dispatch({ type: 'NOP' });
  });
});
