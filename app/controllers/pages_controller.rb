class PagesController < ApplicationController
  def index
  end

  def post
    @data = {
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email],
      subject: params[:subject],
      message: params[:message]
    }


    if (@data[:email].present? && @data[:message].present?)
      flash[:notice] = "Thanks for reaching out, you just emailed us!"
      PagesMailer.contact_email(@data).deliver
    else
      flash[:error] = "Please enter an email and message and try again!"
    end

    redirect_to root_path
  end
end
