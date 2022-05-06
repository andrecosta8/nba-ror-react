class Api::V1::StatsController < ApplicationController
    before_action :set_globalinfo
    def index
        @stats = @globalinfo.stats
        render json: @stats
    end

    def set_globalinfo
        @globalinfo = Globalinfo.new
    end
end