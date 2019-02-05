import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveAllEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

const receiveEvent = ({event, users}) => {
  return {
    type: RECEIVE_EVENT,
    event,
    users
  }
}

const removeEvent = (eventId) => {
  return {
    type: REMOVE_EVENT,
    eventId
  }
}

export const fetchEvents = () => {
  return (dispatch) => {
    return EventApiUtil.fetchEvents().then( events => {
      return dispatch(receiveAllEvents(events))
    })
  }
};

export const fetchEvent = (id) => {
  return (dispatch) => {
    return EventApiUtil.fetchEvent(id).then( event => {
      return dispatch(receiveEvent(event))
    })
  }
};

export const createEvent = (event) => dispatch => (
  EventApiUtil.createEvent(event).then(event => {
    dispatch(receiveEvent(event));
    return event;
  })
);

export const updateEvent = (event => {
  return (dispatch) => {
    return EventApiUtil.updateEvent(event).then( event => {
      return dispatch(receiveEvent(event))
    })
  }
};

export const deleteEvent= (id) => {
  return (dispatch) => {
    return EventApiUtil.deleteEvent(id).then (event => {
      return dispatch(removeEvent(event.id))
    })
  }
}