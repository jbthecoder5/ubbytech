class ContactNotifierMailer < ApplicationMailer
  default :from => 'ubbytech@gmail.com'

  def send_signup_email(contact)
    @contact = contact
    mail( :to => @contact.email,
    :subject => 'Thanks for sending your message. Will respond within 12-24 hours')
  end
end
