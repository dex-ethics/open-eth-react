import { connect } from 'react-redux';
import Link from '../components/Link';
import reducers from '../reducers';

const { setVisibilityFilter } = reducers;

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.app.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
