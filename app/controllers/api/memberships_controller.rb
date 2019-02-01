class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(user_id: current_user.id, group_id: params[:group_id])
    if @membership.save
      render 'api/memberships/show'
    else
      render json: @membership.errors.full_messages, status: 401
    end

  end

  def destroy
    @membership = Membership.find_by(user_id: current_user.id, group_id: params[:group_id])
    @membership.delete
    @group = Group.find(params[:group_id])
    render 'api/groups/show'
  end


end