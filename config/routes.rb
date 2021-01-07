Rails.application.routes.draw do
  root 'login#index'
  get '/auth/spotify/callback', to: 'tracks#index'
end