class SessionsController < ApplicationController

  def create
    credentials = {username: params[:username], password: params[:password]}
    
    @user = User.find_by_credentials(credentials)
    if @user
      login(@user)
      render "api/users/#{user.id}"
    else 
      render json: ["Those are the wrong credentials"]
    end

  end

  def new
  end

  def destroy
    logout
  end

end