class ContactsController < ApplicationController
	def new
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(contact_params)

		if @contact.save
			ContactNotifierMailer.send_signup_email(@contact).deliver
			redirect_to root_url, notice: 'Submission successful. Please check your spam/junk folder.'
		else
			redirect_to contact_us_path
		end
	end


	private
		def contact_params
			params.require(:contact).permit(:firstname, :lastname, :email,
				:phonenumber, :company, :company_type, :description)
		end
end
