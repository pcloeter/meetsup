import * as RsvpApiUtil from '../util/rsvp_api_util';

export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";


const receiveRsvp = ({user, event}) => {
  return {
    type: RECEIVE_RSVP,
    user,
    event,
  }
}

const removeRsvp = ({user, event}) => {
  return {
    type: REMOVE_RSVP,
    user, 
    event,
  }
}


export const createRsvp = (rsvp) => {
  return dispatch => {
    return RsvpApiUtil.createRsvp(rsvp).then( rsvp => {
      return dispatch(receiveRsvp(rsvp))
    })
  };
};

export const deleteRsvp = (eventId) => {
  return dispatch => {
    return RsvpApiUtil.deleteRsvp(eventId).then( rsvp => {
      return dispatch(removeRsvp(rsvp))
    })
  };
};

