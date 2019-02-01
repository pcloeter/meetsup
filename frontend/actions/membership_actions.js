import * as MembershipApiUtil from '../util/membership_api_util';

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";


const receiveMembership = ({user, group}) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    user,
    group,
  }
}

const removeMembership = (membershipId) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membershipId
  }
}


export const createMembership = (membership) => {
  return dispatch => {
    return MembershipApiUtil.createMembership(membership).then( membership => {
      return dispatch(receiveMembership(membership))
    })
  };
};

export const deleteMembership = (groupId) => {
  return dispatch => {
    return MembershipApiUtil.deleteMembership(groupId).then( membershipId => {
      return dispatch(removeMembership(membershipId))
    })
  };
};

