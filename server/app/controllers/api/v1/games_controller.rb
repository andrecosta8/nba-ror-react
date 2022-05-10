class Api::V1::GamesController < ApplicationController
    before_action :set_globalinfo
    def index
        @games = @globalinfo.games
        render json: @games  
    end
    def show
        @gamestats = @globalinfo.gamestats(params["id"])
        render json: @gamestats
    end

    def set_globalinfo
        @globalinfo = Globalinfo.new
    end
end
