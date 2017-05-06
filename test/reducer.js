import { expect } from 'chai';
import reducers from '../src/reducers';

const { reducer } = reducers;

describe('Reducer', () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  const dispatch = (action) => {
    if (Array.isArray(action)) {
      state = action.reduce(reducer, state);
    } else {
      state = reducer(state, action);
    }
  };

  it('should have inititialState', () => {
    expect(state).to.deep.equal({});
  });
  it('should dispatch nop', () => {
    dispatch({ type: 'NOP', payload: {} });
    expect(state).to.deep.equal({});
  });
});
