class Globalinfo
    include HTTParty
    base_uri 'https://rho-web-challenge-1.herokuapp.com'

  
    def initialize()
        @options = {}
    end

    def teams
        self.class.get('/teams', @options)
    end

    def players
        self.class.get('/players', @options)
    end

    def playerstats(id)
        self.class.get("/players/#{id}/stats", @options)
    end

    def games
        self.class.get('/games', @options)
    end 

    def stats
        self.class.get('/stats', @options)
    end 

end
