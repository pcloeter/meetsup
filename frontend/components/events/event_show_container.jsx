import { connect } from 'react-redux';
import { createRsvp, deleteRsvp} from '../../actions/rsvp_actions';
import EventShow from './event_show';


const msp = ( state ) => {
  if (state.entities.events[ownProps.match.params.eventId]) {
    var event = state.entities.events[ownProps.match.params.eventId];
    var host = state.entities.event[ownProps.match.params.groupId].host;
    var attendees = Object.values(state.entities.users)
  } else {
    var event = {};
    var host = {};
    var attendees = {};
  }
  
  return {
    event,
    host,
    attendees
  }
}

const mdp = ( dispatch ) => {
  return {
    createRsvp: (eventId) => dispatch(createRsvp(eventId)),
    deleteRsvp: (rsvpId) => dispatch(deleteRsvp(rsvpId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
  }
}

export default connect(msp, mdp)(EventShow);