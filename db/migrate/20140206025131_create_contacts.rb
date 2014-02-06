class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.belongs_to :person
      t.string :email
      t.string :mobile
      t.string :landline
      t.string :business
      t.timestamps
    end
  end
end
