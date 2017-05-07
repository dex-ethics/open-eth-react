import { connect } from 'react-redux';
import Dilemma from '../components/Dilemma';

const mapStateToProps = (state, ownProps) => ({
  ...state.entities.dilemmas[ownProps.id],
});

const VisibleDilemma = connect(mapStateToProps)(Dilemma);

export default VisibleDilemma;
