# json.set! @user.id do
  json.extract! @user, :id, :session_token, :email, :name, :bio, :location, :hometown, :language, :birthday, :gender, :created_at, :updated_at
  # json.extract! @user, :email, :name, :created_at, :updated_at
# end