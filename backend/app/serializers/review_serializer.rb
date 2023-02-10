class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :comment
  # has_one :user
  has_one :castle
end
