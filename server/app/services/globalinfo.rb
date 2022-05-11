class Globalinfo
    include HTTParty
    base_uri 'https://rho-web-challenge-1.herokuapp.com'

    # getting teams from API
    def teams
        self.class.get('/teams')
    end

    # getting players from API
    def players
        self.class.get('/players')
    end

    # getting player stats from API
    def playerstats(id)
        self.class.get("/players/#{id}/stats")
    end

    # getting game stats from API
    def gamestats(id)
        self.class.get("/games/#{id}")
    end

    # getting games from API
    def games
        self.class.get('/games')
    end 


end
