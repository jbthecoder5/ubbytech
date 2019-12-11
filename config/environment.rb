# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!



ActionMailer::Base.smtp_settings = {
  :user_name => '',
  :password => '',
  :domain => '',
  :address => '',
  :port => 555,
  :authentication => :plain,
  :enable_starttls_auto => true
}
