import * as GroupApiUtil from "../util/group_api_util";

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

const receiveAllGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups
  }
}

const receiveGroup = (group) => {
  debugger
  return {
    type: RECEIVE_GROUP,
    group
  }
}

const removeGroup = (groupId) => {
  return {
    type: REMOVE_GROUP,
    groupId
  }
}

export const fetchGroups = () => {
  return (dispatch) => {
    return GroupApiUtil.fetchGroups().then( groups => {
      return dispatch(receiveAllGroups(groups))
    })
  }
};

export const fetchGroup = (id) => {
  return (dispatch) => {
    return GroupApiUtil.fetchGroup(id).then( group => {
      return dispatch(receiveGroup(group))
    })
  }
};

export const createGroup = (group) => {
  return (dispatch) => {
    return GroupApiUtil.createGroup(group).then( group => {
      return dispatch(receiveGroup(group))
    })
  }
};

export const updateGroup = (group) => {
  return (dispatch) => {
    return GroupApiUtil.updateGroup(group).then( group => {
      return dispatch(receiveGroup(group))
    })
  }
};

export const deleteGroup = (id) => {
  return (dispatch) => {
    return GroupApiUtil.deleteGroup(id).then (group => {
      return dispatch(removeGroup(group.id))
    })
  }
}