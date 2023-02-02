class TripSerializer < ActiveModel::Serializer
  attributes :id, :username, :route_travelled, :hours, :things_to_do, :places_to_eat
  has_one :user
  has_one :castle
end
