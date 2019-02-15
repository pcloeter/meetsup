@groups.each do |group|
  json.set! group.id do
    json.partial! 'group', group: group
    json.memberIds group.member_ids
    json.membersCount group.member_ids.count
    json.organizer group.organizer
  end
end