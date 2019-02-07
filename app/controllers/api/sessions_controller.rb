class Api::SessionsController < ApplicationController

  def create
    credentials = {email: params[:user][:email], password: params[:user][:password]}
    
    @user = User.find_by_credentials(credentials)
    if @user
      login(@user)
      render "api/users/show"
    else 
      render json: ["Incorrect email and/or password. Try again"], status: 401
    end

  end

  def new
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["You are not logged in"], status: 404
    end
  end

end