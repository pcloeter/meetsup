# == Schema Information
#
# Table name: groups
#
#  id           :bigint(8)        not null, primary key
#  name         :string           not null
#  description  :text             not null
#  city         :string
#  latitude     :float
#  longitude    :float
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Group < ApplicationRecord
  validates :name, :description, :organizer_id, presence: true


  belongs_to :organizer,
  class_name: :User,
  foreign_key: :organizer_id

  has_many :memberships,
  class_name: :Membership,
  foreign_key: :group_id

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
