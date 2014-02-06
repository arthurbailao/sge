class Patient < ActiveRecord::Base
  has_one :person, dependent: :destroy
  accepts_nested_attributes_for :person
end
