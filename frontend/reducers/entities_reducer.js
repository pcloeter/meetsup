import {combineReducers} from "redux";
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';
// import membershipsReducer from "./memberships_reducer";



const entitiesReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
  // memberships: membershipsReducer
});

export default entitiesReducer;