class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.belongs_to :person
      t.string :street
      t.string :number
      t.string :complement
      t.string :district
      t.string :city
      t.string :state
      t.string :zip
      t.timestamps
    end
  end
end
