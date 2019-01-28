class Membership < ActiveRecord
  validates :group_id, :user_id, presence: true

  belongs_to :member,
  foreign_key: :user_id

  belongs_to :group,
  foreign_key: :group_id
end