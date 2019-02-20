import { connect } from 'react-redux';
import { createRsvp, deleteRsvp} from '../../actions/rsvp_actions';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';


const msp = ( state, ownProps ) => {
  if (state.entities.events[ownProps.match.params.eventId]) {
    var event = state.entities.events[ownProps.match.params.eventId];
    var host = state.entities.events[ownProps.match.params.eventId].host;
    var attendees = state.entities.events[ownProps.match.params.eventId].attendees
  } else {
    var event = {};
    var host = {};
    var attendees = {};
  }
  
  return {
    event,
    host,
    attendees,
    currentUser: state.entities.users[state.session.id],
  }
}

const mdp = ( dispatch ) => {
  return {
    createRsvp: (eventId) => dispatch(createRsvp(eventId)),
    deleteRsvp: (rsvpId) => dispatch(deleteRsvp(rsvpId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
  }
}

export default connect(msp, mdp)(EventShow);