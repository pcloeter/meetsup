json.set! @user.id do
  json.extract! @user, :id, :username, :email, :name, :bio, :location, :hometown, :language, :birthday, :gender, :created_at, :updated_at
end