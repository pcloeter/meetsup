import { connect } from 'react-redux';
import {fetchGroup} from "../../actions/group_actions";
import GroupShow from "./group_show";

const msp = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId] || {memberIds:[]};
  const members = group.memberIds.map( id => {
    return state.entities.users[id];
  })
  return {
    group,
    // organizerName: state.entities.users[group.organizer_id],
    members
  }
};

const mdp = (dispatch) => {
  return {
    fetchGroup: (id) => dispatch(fetchGroup(id))
  }
}


export default connect(msp, mdp)(GroupShow);