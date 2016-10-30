Rails.application.routes.draw do
  devise_for :users
  root to: "static_pages#home"

  namespace :api do
    resources :items, only: [:index, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
