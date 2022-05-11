import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';

function Games() {
  const params = useParams(); // for holding params from Links
  const [games, setGames] = useState([]); // for holding data from Games fetched from Server
  const [loading, setLoading] = useState(true) // useful for loading spinner feature
  const navigate = useNavigate() // navigation hook

  useEffect(() => {
    getTeamGamesFromApi();
  }, []) // only called when app is loaded for the first time

  async function getTeamGamesFromApi() {
    try {
      const getTeamGames = await axios.get('http://localhost:3001/api/v1/games')
      const gamesList = getTeamGames.data.data
      const filterdGames = gamesList.filter((game) => {
        if (game.home_team.id == params.id || game.visitor_team.id == params.id) {
          return game
        }
      })
      setGames(filterdGames)
      setLoading(false)
    } catch (err) {
      navigate("/error")
    }
  } //function to fetch Games data from API

  return (
    <div className='gamesPage'>
      {!loading ? games.map((game) => {
        return (

          <Card key={game.id} className='gamecard' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{game.home_team.abbreviation} vs {game.visitor_team.abbreviation}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{game.date.split('T')[0]}</Card.Subtitle>
              <Link to={'/games/' + game.id}><button type="button" class="btn btn-danger">Statistics</button></Link>
            </Card.Body>
          </Card>
        )
      }) : <Spinner animation="border" variant="info" />}
    </div>
  )
}

export default Games
