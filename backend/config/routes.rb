Rails.application.routes.draw do
  resources :trips
  resources :castles
  resources :reviews
  resources :users, only: [:index, :show, :create]

  # sessions and custom routes
  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end
