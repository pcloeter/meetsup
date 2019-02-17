export const createRsvp = (groupId) => {
  return $.ajax({
    method: "post",
    url: `api/groups/${groupId}/rsvps`
  })
}


export const deleteRsvp = (groupId) => {
  return $.ajax({
    method: "delete",
    url: `api/groups/${groupId}/rsvps/1`
  })
}