Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :new, :show, :destroy]
    resources :groups do
      resources :memberships, only: [:create, :destroy]
    end
    resources :events do
      resources :rsvps, only: [:create, :destroy]
    end
  end

  root to: 'static_pages#root'
end
