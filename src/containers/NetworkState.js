import { connect } from 'react-redux';
import NetworkIndicator from '../components/NetworkIndicator';

const mapStateToProps = state => ({
  fetching: state.network.isFetching,
});

const NetworkState = connect(mapStateToProps)(NetworkIndicator);

export default NetworkState;
