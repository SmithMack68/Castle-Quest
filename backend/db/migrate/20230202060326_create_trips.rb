class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :username
      t.text :route_travelled
      t.integer :hours
      t.text :things_to_do
      t.text :places_to_eat
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :castle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
