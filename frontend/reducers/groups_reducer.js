import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
import { merge } from 'lodash';
import { RECEIVE_MEMBERSHIP } from '../actions/membership_actions';


const groupsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;

    case RECEIVE_MEMBERSHIP: 
    case RECEIVE_GROUP:
      return merge({}, oldState, action.group );

    case REMOVE_GROUP:
      const newState = merge({}, oldState);
      delete newState[action.groupId];
      return newState;
      
    default:
      return oldState;
  }
};

export default groupsReducer;