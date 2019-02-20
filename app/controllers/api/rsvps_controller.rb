class Api::RsvpsController < ApplicationController

  def create
    @rsvp = Rsvp.find_by(user_id: current_user.id, event_id: params[:event_id])
    if @rsvp
      return
    else
      @rsvp = Rsvp.new(user_id: current_user.id, event_id: params[:event_id])
      if @rsvp.save
        render 'api/rsvps/show'
      else
        render json: @rsvp.errors.full_messages, status: 401
      end
    end
  end

  def destroy
    @rsvp = Rsvp.find_by(user_id: current_user.id, event_id: params[:event_id])
    @rsvp.delete
    @event = Event.find(params[:event_id])
    render 'api/events/show'
  end


end