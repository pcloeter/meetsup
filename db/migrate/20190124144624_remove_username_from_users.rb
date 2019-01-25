class RemoveUsernameFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username
    remove_column :users, :name
    add_column :users, :name, :string, null: false
  end
end
