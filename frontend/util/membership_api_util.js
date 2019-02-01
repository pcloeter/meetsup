export const createMembership = (groupId) => {
  return $.ajax({
    method: "post",
    url: `api/groups/${groupId}/memberships`
  })
}


export const deleteMembership = (groupId) => {
  return $.ajax({
    method: "delete",
    url: `api/groups/${groupId}/memberships/1`
  })
}