Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :teams
      resources :players
      resources :games
    end
  end
end