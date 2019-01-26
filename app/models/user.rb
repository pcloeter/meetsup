class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }


  after_initialize :ensure_session_token
  attr_reader :password

  belongs_to :group 
  has_many :organized_groups

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