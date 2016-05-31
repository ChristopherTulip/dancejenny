class PagesMailer < ActionMailer::Base
  default from: "unknown@unkown.com"

  def contact_email data
    @data = data
    mail(to: 'christopher.tulip@gmail.com', subject: @data[:subject], reply_to: @data[:email])

    # mail(to: ['jennydavie21@hotmail.com','r_sims@live.com'],
    #            subject: @data[:subject],
    #            reply_to: @data[:email]
    #      )
  end
end
