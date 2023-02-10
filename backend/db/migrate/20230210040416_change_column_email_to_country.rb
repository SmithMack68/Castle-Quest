class ChangeColumnEmailToCountry < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :email, :country
  end
end
