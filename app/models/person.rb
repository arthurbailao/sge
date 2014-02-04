class Person < ActiveRecord::Base
  has_one :address
  belongs_to :patient

  validates :name, :birth, presence: true
end
