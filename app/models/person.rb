class Person < ActiveRecord::Base
  has_one :address, dependent: :destroy
  belongs_to :patient

  validates :name, :birth, :gender, presence: true
  validates_uniqueness_of :cpf, :rg, allow_blank: true

  accepts_nested_attributes_for :address
end
