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
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["You are not logged in"], status: 404
  end

end