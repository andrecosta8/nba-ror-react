class Api::V1::TeamsController < ApplicationController
    before_action :set_globalinfo  # runs set_globalinfo before index and show
    
    # render all teams after getting data from globalinfo
    def index
        @teams = @globalinfo.teams
        render json: @teams
    end

    def set_globalinfo
        @globalinfo = Globalinfo.new
    end
end
