class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :gender
      t.string :rg
      t.string :cpf
      t.string :birth

      t.timestamps
    end
  end
end
