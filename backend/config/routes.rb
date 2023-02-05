Rails.application.routes.draw do
  resources :trips
  resources :castles
  resources :reviews
  resources :users, only: [:index, :show, :create]

  # sessions and custom routes
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end
