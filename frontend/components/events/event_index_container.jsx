import { connect } from 'react-redux';
import {fetchGroup, deleteGroup} from "../../actions/group_actions";
import EventIndex from "./event_index";
import { createMembership, deleteMembership } from '../../actions/membership_actions';
import { createRsvp, deleteRsvp} from '../../actions/rsvp_actions';


const msp = (state, ownProps) => {
  if (state.entities.groups[ownProps.match.params.groupId]) {
    var group = state.entities.groups[ownProps.match.params.groupId];
    var organizer = state.entities.groups[ownProps.match.params.groupId].organizer;
  } else {
    var group = {memberIds:[]};
    var organizer = {};
  }
  
  if (state.entities.events) {
    var events = Object.values(state.entities.events);
  } else {
    var events = {};
  }

  const members = group.memberIds.map( id => {
    const user = state.entities.users[id]
    return user
  }).filter( user => Boolean(user));

  return {
    group,
    events,
    organizer,
    members,
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history,
  }
};

const mdp = (dispatch) => {
  return {
    deleteGroup: (id) => dispatch(deleteGroup(id)),
    fetchGroup: (id) => dispatch(fetchGroup(id)),
    createMembership: (groupId) => dispatch(createMembership(groupId)),
    deleteMembership: (membershipId) => dispatch(deleteMembership(membershipId)),
    createRsvp: (eventId) => dispatch(createRsvp(eventId)),
    deleteRsvp: (rsvpId) => dispatch(deleteRsvp(rsvpId)),
  }
}


export default connect(msp, mdp)(EventIndex);