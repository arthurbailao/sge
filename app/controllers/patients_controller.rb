class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end

  def new
    @patient = Patient.new
    @patient.build_person
    @patient.person.build_address
  end

  def create
    @patient = Patient.new post_params
    if @patient.save
      redirect_to patients_path, notice: "Paciente criado com sucesso"
    else
      render action: "new"
    end
  end

  private
  def post_params
    params.require(:patient).permit(
      person_attributes: [:name, :birth, :gender, :cpf, :rg,
        address_attributes: [:street, :number, :complement, :district, :city, :state, :zip]
    ])
  end

end
