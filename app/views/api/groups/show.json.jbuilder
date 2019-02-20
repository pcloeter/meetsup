json.group do
  json.set! @group.id do 
    json.partial! 'api/groups/group', group: @group
    json.memberIds @group.member_ids
    json.membersCount @group.member_ids.count
    json.eventsCount @group.events.count
    json.organizer @group.organizer
  end
end

json.events do
  @group.events.each do |event|
    json.set! event.id do
      json.id event.id
      json.partial! 'api/events/event', event: event
      json.attendeeIds event.attendee_ids
      json.attendeesCount event.attendees.count
    end
  end
end

json.users do
  @group.members.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end






