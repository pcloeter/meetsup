import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { merge } from 'lodash';
import { RECEIVE_RSVP } from '../actions/rsvp_actions';


const eventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_EVENTS:
    return action.events;
    case RECEIVE_RSVP:
    case RECEIVE_EVENT:
      return merge({}, oldState, action.event)
    case REMOVE_EVENT:
      let newState = merge({}, oldState);
      delete newState[action.eventId];
      return newState;

    default:
      return oldState;
  }
}


export default eventsReducer;