@groups.each do |group|
  json.set! group.id do
    json.partial! 'group', group: group
    json.memberIds []
    # json.eventIds []
  end
end