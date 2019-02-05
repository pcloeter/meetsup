# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  bio             :text
#  location        :string
#  hometown        :string
#  language        :string
#  birthday        :string
#  gender          :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string           not null
#

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }


  after_initialize :ensure_session_token
  attr_reader :password

  has_many :memberships,
  class_name: :Membership,
  foreign_key: :user_id

  has_many :groups,
  through: :memberships,
  source: :group
  
  has_many :organized_groups,
  class_name: :Group,
  foreign_key: :organizer_id

  has_many :rsvps,
  class_name: :Rsvp,
  foreign_key: :user_id

  

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(credentials)
    user = User.find_by(email: credentials[:email])
    if user
      return user if user.is_password?(credentials[:password])
    else
      return nil
    end
  end


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    return BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    return self.session_token ||= User.generate_session_token
  end
end
