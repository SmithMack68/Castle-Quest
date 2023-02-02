class User < ApplicationRecord
    has_secure_password
    validates :name, :email, presence: true
    validates :username, presence: true, uniqueness: true
end
