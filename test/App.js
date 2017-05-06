import React from 'react';
import PropTypes from 'prop-types';
import { expect } from 'chai';
import { render } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../src/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Fake user agent for MuiThemeProvider
global.navigator = { userAgent: 'all' };

const Provider = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

describe('App', () => {
  it('renders without crashing', () => {
    render(<Provider><App /></Provider>);
  });
  it('has title "Open Eth"', () => {
    const app = render(<Provider><App /></Provider>);
    expect(app.text()).to.contain('Open Eth');
  });
});
