json.user do
  json.set! @membership.user_id do
    json.id @membership.user_id
    json.groupIds @membership.member_group_ids
  end
end

json.group do
  json.set! @membership.group_id do
    json.id @membership.group_id
    json.memberIds @membership.group_member_ids
  end
end