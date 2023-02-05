class Castle < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    has_many :trips, dependent: :destroy
    has_many :users, through: :trips

    accepts_nested_attributes_for :reviews
end
