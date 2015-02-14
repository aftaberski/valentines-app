class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :user, null: false
      t.references :article, null: false
      t.text :content, null: false

      t.timestamps
    end
  end
end
