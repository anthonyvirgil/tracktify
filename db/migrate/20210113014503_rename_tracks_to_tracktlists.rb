class RenameTracksToTracktlists < ActiveRecord::Migration[6.1]
  def change
    rename_table :tracks, :tracktlists
  end
end
