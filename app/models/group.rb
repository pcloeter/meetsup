class Group < ApplicationRecord
  validates :name, :description, :organizer_id, :latitude, :longitude presence: true

  belongs_to :organizer,
  className: :user,
  foreign_key: :organizer_id

  has_many :members

  def  self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
    .where("latitude > ?", bounds[:southWest][:latitude])
    .where("longitude > ?", bounds[:southWest][:longitude])
    .where("longitude < ?", bounds[:northEast}[:longitude]])
  end

end