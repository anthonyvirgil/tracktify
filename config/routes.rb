Rails.application.routes.draw do
  root 'login#index'
  get '/auth/spotify/callback', to: 'tracktlists#index'
  get '/auth/failure', to: 'login#index'
end