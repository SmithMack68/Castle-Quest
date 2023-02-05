class CastleSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :location, :short_description, :hours_of_operation, :website
end
