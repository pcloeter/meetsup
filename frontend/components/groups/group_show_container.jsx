import { connect } from 'react-redux';
import {fetchGroup, deleteGroup} from "../../actions/group_actions";
import GroupShow from "./group_show";
import { createMembership, deleteMembership } from '../../actions/membership_actions';

const msp = (state, ownProps) => {
  if (state.entities.groups[ownProps.match.params.groupId]) {
    var group = state.entities.groups[ownProps.match.params.groupId];
    var organizer = state.entities.groups[ownProps.match.params.groupId].organizer;
    // var events = state.entities.groups[ownProps.match.params.groupId].events
  } else {
    var group = {memberIds:[]};
    var organizer = {};
  }
  
  const members = group.memberIds.map( id => {
    const user = state.entities.users[id]
    return user
  }).filter( user => Boolean(user));

  return {
    group,
    organizer,
    members,
    currentUser: state.entities.users[state.session.id],
  }
};

const mdp = (dispatch) => {
  return {
    deleteGroup: (id) => dispatch(deleteGroup(id)),
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    deleteMembership: (membershipId) => dispatch(deleteMembership(membershipId))
  }
}


export default connect(msp, mdp)(GroupShow);