class UsersController < ApplicationController
	def index

	end

	def new 

	end

	def create
		@user = User.new(user_params)

		if @user.save
			flash[:success] = "Message Sent! Give us 12-24 hours to reply back. Thank you for your business!"
			UserNotifierMailer.send_signup_email(@user).deliver
			redirect_to root_url
		else
			flash[:danger] = "Error filling out form"
			redirect_to root_url
		end

	end


	private 
		def user_params
			params.require(:user).permit(:name, :email, :message)
		end
end
