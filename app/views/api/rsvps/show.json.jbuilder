json.user do
  json.set! @rsvp.user_id do
    json.id @rsvp.user_id
    json.eventIds @rsvp.attendee.event_ids
  end
end

json.event do
  json.set! @rsvp.event_id do
    json.id @rsvp.event_id
    json.attendeeIds @rsvp.event.attendee_ids
    json.attendees @rsvp.event.attendees
    json.attendeesCount @rsvp.event.attendees.count
  end
end