json.group do 
  json.partial! 'api/groups/group', group: @group
  json.memberIds @group.members.pluck(:id)
  # json.eventIds @group.events.pluck(:id)
end
