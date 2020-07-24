import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

//container component
const mapStateToProps = (state, ownProps) => ({
  // check the button status: SHOW_ALL, SHOW_ACTIIVE, SHOW_COMPLETED,return false or true
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
