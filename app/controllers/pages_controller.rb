class PagesController < ApplicationController
  def index
  end

  def post
    # binding.pry
    if (true)
      flash[:notice] = "Thanks for reaching out, you just emailed us!"
    else
      flash[:error] = "Sorry something went wrong, please try emailing again!"
    end

    redirect_to root_path
  end
end
