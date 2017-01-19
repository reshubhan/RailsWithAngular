class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :comment_body
      t.integer :upvote
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
