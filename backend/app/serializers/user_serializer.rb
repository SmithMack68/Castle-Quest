class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :password_digest, :username
end
