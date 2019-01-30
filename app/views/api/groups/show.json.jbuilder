json.group do
  json.set! @group.id do 
    json.partial! 'api/groups/group', group: @group
    json.memberIds @group.member_ids
    json.membersCount @group.member_ids.count
    # json.eventIds @group.events.pluck(:id)
  end
end

json.users do
  @group.members.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end



