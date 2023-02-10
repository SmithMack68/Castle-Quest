class RemoveUserFromReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :user_id
  end
end
