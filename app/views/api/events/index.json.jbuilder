@events.each do |event|
  json.set! event.id do
    json.partial! 'event', event: event
    json.attendees event.attendees
    json.attendeeIds event.attendee_ids
    json.attendeesCount event.attendees.count
    json.host event.host_id
    json.group event.group
    json.formattedDate event.date.strftime("%B %e, %Y")
    json.formattedTime event.time.strftime("%l:%M %p")
  end
end