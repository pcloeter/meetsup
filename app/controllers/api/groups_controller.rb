class Api::GroupsController < ApplicationController
before_action :require_logged_in, only: [:create, :edit, :destroy]

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages
    end
  end
  
  def show
    @group = Group.find(params[:id])
  end

  def edit
    @group = Group.find(params[:id])
    if @group.save
      render "api/groups/show"
    else
      render json: @group.errors.full_messages
    end

  end

  def index
    @groups = bounds ? Group.in_bounds(bounds) : Group.all
  end

  def destroy
    @group = Group.find(params[:id])
  end

  def bounds
    params[:bounds]
  end

  def group_params
    params.require(:group).permit(
      :name,
      :description,
      :organizer_id
    )
  end

end