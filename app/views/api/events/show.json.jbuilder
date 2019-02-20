json.event do
  json.set! @event.id do 
    json.partial! 'api/events/event', event: @event
    json.attendeeIds @event.attendee_ids
    json.attendeesCount @event.attendee_ids.count
    json.attendees @event.attendees
    json.host @event.host
    json.group @event.group
  end
end

json.users do
  @event.attendees.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end