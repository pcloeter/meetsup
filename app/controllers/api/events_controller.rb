class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :destroy]

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages
    end

  end

  def show
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
      if @event.save
        render 'api/events/show'
      else
        render json: @event.errors.full_messages
      end
  end

  def index
    @events = Event.all
  end

  def destroy
    @event.Event.find(params[:id])
    @event.delete
  end

  def event_params
    params.require(:event).permit(
      :date, 
      :time, 
      :details,
      :address
      )
  end

end