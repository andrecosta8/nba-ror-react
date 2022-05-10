class Api::V1::TeamsController < ApplicationController
    before_action :set_globalinfo
    def index
        @teams = @globalinfo.teams
        render json: @teams
    end
    def set_globalinfo
        @globalinfo = Globalinfo.new
    end
end
