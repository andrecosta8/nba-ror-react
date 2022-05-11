Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :teams
      resources :players
      get "players/:id/stats", to: "players#playerstats" 
      resources :games
      get "games/:id", to: "games#show"
    end
  end
end