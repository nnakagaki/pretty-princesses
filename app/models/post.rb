class Post < ActiveRecord::Base
  validates :title, :body, length: {minimum: 1}
end
