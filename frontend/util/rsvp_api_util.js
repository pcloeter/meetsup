export const createRsvp = (eventId) => {
  return $.ajax({
    method: "post",
    url: `api/events/${eventId}/rsvps`
  })
}


export const deleteRsvp = (rsvpId) => {
  return $.ajax({
    method: "delete",
    url: `api/events/${rsvpId}/rsvps/1`
  })
}