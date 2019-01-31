export const createMembership = (groupId) => {
  return $.ajax({
    method: "post",
    url: `api/groups/${groupId}/memberships`,
    data: { membership }
  })
}


export const deleteMembership = (membershipId) => {
  return $.ajax({
    method: "delete",
    url: `api/memberships/${membershipId}`
  })
}