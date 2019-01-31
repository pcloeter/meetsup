import * as MembershipApiUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";


const receiveMembership = (membership) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  }
}

const removeMembership = (membershipId) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membershipId
  }
}


export const createMembership = (groupId) => {
  return dispatch => {
    return MembershipApiUtil.createMembership(groupId).then( membership => {
      return dispatch(receiveMembership(membership))
    })
  };
};

export const deleteMembership = (membershipId) => {
  return dispatch => {
    return MembershipApiUtil.deleteMembership(membershipId).then( membershipId => {
      return dispatch(removeMembership(membershipId))
    })
  };
};

