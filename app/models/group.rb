class Group < ApplicationRecord
  validates :name, :description, :organizer_id, presence: true


  belongs_to :organizer,
  class_name: :User,
  foreign_key: :organizer_id

  has_many :memberships

  has_many :members,
  through: :memberships,
  source: :member


  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:latitude])
    .where("latitude > ?", bounds[:southWest][:latitude])
    .where("longitude > ?", bounds[:southWest][:longitude])
    .where("longitude < ?", bounds[:northEast][:longitude])
  end

end