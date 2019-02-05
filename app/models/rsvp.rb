class Rsvp < ApplicationRecord
  validates :user_id, :event_id, presence: true

  belongs_to :attendee,
  class_name: :User,
  foreign_key: :user_id

  belongs_to :event,
  class_name: :Event,
  foreign_key: :event_id




end