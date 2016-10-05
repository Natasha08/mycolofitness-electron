import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Efridge from 'pages/efridge';
import * as filterActions from 'actions/visibility_filter';

function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(filterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Efridge);
