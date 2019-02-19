import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import { merge } from 'lodash';
import { RECEIVE_RSVP } from '../actions/rsvp_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';


const eventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_GROUP:
    case RECEIVE_EVENTS:
      if (action.events) return action.events;
      else return {}
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