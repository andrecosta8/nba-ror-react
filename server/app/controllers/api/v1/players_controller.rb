class Api::V1::PlayersController < ApplicationController
    before_action :set_globalinfo
    def index
        @players = @globalinfo.players
        render json: @players
    end

    def set_globalinfo
        @globalinfo = Globalinfo.new
    end
end
