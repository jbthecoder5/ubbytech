class ContactNotifierMailer < ApplicationMailer
  default :from => 'ubbytech@gmail.com',
          :bcc => 'ubbytech@gmail.com',
          :reply => 'ubbytech@gmail.com'


  def send_signup_email(contact)
    @contact = contact
    mail( :to => @contact.email,
    :subject => 'UbbyTech Support - Your message was sent')
  end
end
