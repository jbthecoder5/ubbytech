class UsersController < ApplicationController
	def index

	end

	def new 

	end

	def create
		@user = User.new(user_params)

		if @user.save
			UserNotifierMailer.send_signup_email(@user).deliver
			redirect_to root_url, notice: 'Thank you for your business, expect a reply within 10-12 hours.	'
		else
			redirect_to root_url, alert: 'Please fill out the form correctly. Thank you!'
		end

	end


	private 
		def user_params
			params.require(:user).permit(:name, :email, :message)
		end
end
