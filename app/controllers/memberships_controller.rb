class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
      if @membership.save
        render 'api/memberships/show'
      end
  end

  def destroy
    @membership = Membership.find(params[:id])
    @membership.delete

  end

  def membership_params
    params.require(:membership).permit(:user_id, :group_id)
  end
end