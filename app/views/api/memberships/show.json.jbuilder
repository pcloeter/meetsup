json.membership do  
  json.extract! @membership, :id, :group_id, :user_id, :created_at, :updated_at
end