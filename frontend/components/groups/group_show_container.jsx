import { connect } from 'react-redux';
import {fetchGroup} from "../../actions/group_actions";
import GroupShow from "./group_show"

const msp = (state, ownProps) => {
  debugger
  return {

  group: state.groups[ownProps.match.params.groupName],
  organizerName: state.users[organizer_id],
  }
};

const mdp = (dispatch) => {
  return {
    fetchGroup: (id) => dispatch(fetchGroup(id))
  }
}


export default connect(msp, mdp)(GroupShow);