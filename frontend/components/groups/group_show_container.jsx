import { connect } from 'react-redux';
import {fetchGroup} from "../../actions/group_actions";
import GroupShow from "./group_show";
import { createMembership, deleteMembership } from '../../actions/membership_actions';

const msp = (state, ownProps) => {
  const group = state.entities.groups[ownProps.match.params.groupId] || {memberIds:[]};
  let organizer = state.entities.users[group.organizer_id] || {}
  const members = group.memberIds.map( id => {
    const user = state.entities.users[id]
    return user
  }).filter( user => Boolean(user));
  
  return {
    group,
    organizer,
    members
  }
};

const mdp = (dispatch) => {
  return {
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    deleteMembership: (membershipId) => dispatch(deleteMembership(membershipId))
  }
}


export default connect(msp, mdp)(GroupShow);