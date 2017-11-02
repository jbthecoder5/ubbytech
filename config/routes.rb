Rails.application.routes.draw do
    
  root 'pages#index'
  get '/services', to: 'pages#services', as: '/services'
  get '/about', to: 'pages#about', as: '/about'
  get '/portfolio', to: 'pages#portfolio', as: '/portfolio'
  get '/contact', to: 'pages#contact', as: '/contact'
  get '/blog', to: 'pages#blog', as: '/blog'
  
end
