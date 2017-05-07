import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import VisibleDilemma from '../containers/VisibleDilemma';

const DilemmaList = ({ dilemmas, onDilemmaClick }) => (
  <List>
    {dilemmas.map(id => <VisibleDilemma key={id} id={id} onClick={() => onDilemmaClick(id)} />)}
  </List>
);

DilemmaList.propTypes = {
  dilemmas: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onDilemmaClick: PropTypes.func.isRequired,
};

export default DilemmaList;
