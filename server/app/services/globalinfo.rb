class Globalinfo
    include HTTParty
    base_uri 'https://rho-web-challenge-1.herokuapp.com'

    def initialize
        @options = {}
    end

    def teams
        self.class.get('/teams', @options)
    end

end
