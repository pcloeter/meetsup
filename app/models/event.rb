class Event < ApplicationRecord
  validates :group_id, :host_id, :details, presence: true

  belongs_to :host,
  class_name: :User,
  foreign_key: :host_id

  belongs_to :group,
  class_name: :Group,
  foreign_key: :group_id

  has_many :rsvps,
  class_name: :Rsvp,
  foreign_key: :event_id

  has_many :attendees,
  through: :rsvps,
  source: :attendee


end