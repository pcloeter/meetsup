class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.integer :group_id, null: false
      t.string :title, null: false
      t.text :details
      t.string :address
      t.string :picture_url
      t.timestamps
    end
  end
end
