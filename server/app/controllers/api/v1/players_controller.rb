class Api::V1::PlayersController < ApplicationController
    before_action :set_globalinfo  # runs set_globalinfo before index and show
    
    # render all players after getting data from globalinfo
    def index
        @players = @globalinfo.players
        render json: @players
    end

     # send id from taken from frontend to globalinfo and then render data 
    def playerstats
        @playerstats = @globalinfo.playerstats(params["id"])
        render json: @playerstats
    end

    def set_globalinfo
        @globalinfo = Globalinfo.new()
    end
end
