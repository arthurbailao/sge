class PatientsController < ApplicationController
  def new
    @patient = Patient.new
    @patient.person = Person.new
    @patient.person.address = Address.new
  end

  def create
  end
end
