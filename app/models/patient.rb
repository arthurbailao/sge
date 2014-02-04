class Patient < ActiveRecord::Base
  has_one :person
end
