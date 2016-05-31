class PagesController < ApplicationController
  def index
  end

  def post
    # binding.pry
    redirect_to root_path, notice: "Thanks for reaching out, you just emailed us!"
  end
end
