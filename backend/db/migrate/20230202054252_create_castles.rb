class CreateCastles < ActiveRecord::Migration[7.0]
  def change
    create_table :castles do |t|
      t.string :name
      t.string :image_url
      t.string :location
      t.string :short_description
      t.string :hours_of_operation
      t.string :website
      t.integer :user_id

      t.timestamps
    end
  end
end
