import {merge, remove} from 'lodash';
import { RECEIVE_MEMBERSHIP, REMOVE_MEMBERSHIP } from '../actions/membership_actions';


const membershipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let state = merge( {}, oldState);

  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      state[action.membership.group_id].memberIds.push(action.membership.user_id);
      return state;

    case REMOVE_MEMBERSHIP:
      const func = (id) => {
        return id === action.user_id
      }

      _.remove(state[action.membership.group_id].memberIds, func);
      return state;

      default:
        return oldState;
  }
}

export default membershipsReducer;