import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';
import reducers from '../../src/reducers';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Fake user agent for MuiThemeProvider
global.navigator = { userAgent: 'all' };

// Always deep-freeze state during tests
const wrapReducer = reducer => (...args) => deepFreeze(reducer(...args));

// Create the Redux store
const store = createStore(
  wrapReducer(
    combineReducers({
      app: reducers.reducer,
    })
  )
);

const MockProviders = ({ children }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      {children}
    </Provider>
  </MuiThemeProvider>
);
MockProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockProviders;
