class Api::V1::PlayerstatsController < ApplicationController
    before_action :set_globalinfo
    def index
        @playerstats = @globalinfo.playerstats
        render json: @playerstats
    end
    def set_globalinfo
        @globalinfo = Globalinfo.new
    end

    private 
    def player_params
        params.require(:playerstats).permit(:id)
    end
end