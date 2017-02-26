class UsersController < ApplicationController
	def index

	end

	def new 

	end

	def create
		@user = User.new(user_params)

		if @user.save
			UserNotifierMailer.send_signup_email(@user).deliver
			redirect_to root_url, :notice => 'Message Sent! Give us 12-24 hours to reply back. Thank you for your business!'
		else
			redirect_to root_url, :notice => 'error!'
		end

	end


	private 
		def user_params
			params.require(:user).permit(:name, :email, :message)
		end
end
