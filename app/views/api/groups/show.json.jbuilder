json.group do
  json.set! @group.id do 
    json.partial! 'api/groups/group', group: @group
    json.memberIds @group.member_ids
    json.membersCount @group.member_ids.count
    json.eventsCount @group.events.count
    json.organizer @group.organizer
    json.events @group.events do |event|
      json.attendeeIds event.attendee_ids
      json.attendeesCount event.attendee_ids.count
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






