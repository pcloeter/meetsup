class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :name
      t.text :bio
      t.string :location
      t.string :hometown
      t.string :language
      t.string :birthday
      t.string :gender
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email 
    add_index :users, :session_token
  end
end
