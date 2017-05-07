import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

const Dilemma = ({ name, description }) => <ListItem primaryText={`${name}: ${description}`} />;

Dilemma.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dilemma;
