class AddPatientRefToPeople < ActiveRecord::Migration
  def change
    add_reference :people, :patient, index: true
  end
end
