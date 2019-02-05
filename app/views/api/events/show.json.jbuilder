json.event do
  json.set! @event.id do 
    json.partial! 'api/events/event', event: @event
    json.attendeeIds @event.attendee_ids
    json.attendeesCount @event.attendee_ids.count
  end
end

json.users do
  @event.attendees.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end