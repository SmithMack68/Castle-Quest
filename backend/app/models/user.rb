class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :username, :email, presence: true, uniqueness: true

    has_many :reviews
    has_many :castles, -> { distinct }, through: :reviews

    has_many :trips
    has_many :castles, -> { distinct }, through: :trips
end
