whiclsclass AddDateTimeToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :date, :date
    add_column :events, :time, :time
    add_column :groups, :picture_url, :string
    add_column :users, :picture_url, :string
  end
end
