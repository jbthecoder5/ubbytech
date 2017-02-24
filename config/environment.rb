# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!



ActionMailer::Base.smtp_settings = {
  :user_name => 'josephpbourne',
  :password => 'H061290m103!',
  :domain => 'www.ubbytech.com',
  :address => 'smtp.sendgrid.net',
  :port => 587,
  :authentication => :plain,
  :enable_starttls_auto => true
}