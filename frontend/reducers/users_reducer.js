import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';
import { RECEIVE_GROUP } from "../actions/group_actions";
import { RECEIVE_MEMBERSHIP } from "../actions/membership_actions";
import { RECEIVE_EVENT } from "../actions/event_actions";


const usersReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, oldState, {[action.user.id]: action.user });
      return newState;
    case RECEIVE_EVENT:
    case RECEIVE_GROUP:
      return merge( {}, oldState, action.users);
    case RECEIVE_MEMBERSHIP:
      return merge( {}, oldState, action.user)
    default:
      return oldState;
  }
};

export default usersReducer;