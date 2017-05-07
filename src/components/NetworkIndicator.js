import React from 'react';
import PropTypes from 'prop-types';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const NetworkIndicator = ({ fetching }) => (
  <RefreshIndicator left={10} top={10} status={fetching ? 'loading' : 'hide'} />
);

NetworkIndicator.propTypes = {
  fetching: PropTypes.bool.isRequired,
};

export default NetworkIndicator;
