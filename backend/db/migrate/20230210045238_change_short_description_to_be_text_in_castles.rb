class ChangeShortDescriptionToBeTextInCastles < ActiveRecord::Migration[7.0]
  def change
    change_column :castles, :short_description, :text
  end
end
