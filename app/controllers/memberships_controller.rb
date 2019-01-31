class MembershipsController < ApplicationController

  def create
    Membership.new(user_id, group_id)
  end

  def destroy
    
  end
end