import { connect } from 'react-redux';
import DilemmaList from '../components/DilemmaList';

const mapStateToProps = state => ({
  dilemmas: Object.keys(state.entities.dilemmas),
});

const mapDispatchToProps = () => ({
  onDilemmaClick: () => {},
});

const VisibleDilemmaList = connect(mapStateToProps, mapDispatchToProps)(DilemmaList);

export default VisibleDilemmaList;
