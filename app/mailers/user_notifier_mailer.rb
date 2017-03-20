class UserNotifierMailer < ApplicationMailer
	default :from => 'ubbytech@gmail.com'

	# send a signup email to the user, pass in the user object that   contains the user's email address
  	def send_signup_email(user)
	    @user = user
	    mail( :to => @user.email,
	    :subject => '[Joseph Bourne] from UbbyTech' )
  	end
end




# default from email address below
#any_from_address@example.com


def takenNow

end