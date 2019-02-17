export const createRsvp = (eventId) => {
  return $.ajax({
    method: "post",
    url: `api/events/${eventId}/rsvps`
  })
}


export const deleteRsvp = (eventId) => {
  return $.ajax({
    method: "delete",
    url: `api/events/${eventId}/rsvps/1`
  })
}