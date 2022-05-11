class Api::V1::GamesController < ApplicationController
    before_action :set_globalinfo # runs set_globalinfo before index and show

    # render all games after getting data from globalinfo
    def index 
        @games = @globalinfo.games
        render json: @games  
    end 

    # send id from taken from frontend to globalinfo and then render data 
    def show
        @gamestats = @globalinfo.gamestats(params["id"])
        render json: @gamestats
    end

    def set_globalinfo
        @globalinfo = Globalinfo.new
    end
end
