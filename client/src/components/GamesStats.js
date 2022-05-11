import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Card, Spinner } from 'react-bootstrap';

function GamesStats() {
  const params = useParams(); // for holding params from Links
  const [gameStats, setGameStats] = useState([]); // for holding data from GameStats fetched from Server
  const [loading, setLoading] = useState(true) // useful for loading spinner feature
  const navigate = useNavigate() // navigation hook

  useEffect(() => {
    getStatsFromApi();
  }, []) // only called when app is loaded for the first time

  async function getStatsFromApi() {
    try {
      const getStats = await axios.get(`http://localhost:3001/api/v1/games/${params.id}`)
      const gameInfo = getStats.data
      const filteredInfo = {
        id: gameInfo.id,
        homeName: gameInfo.home_team.full_name,
        awayName: gameInfo.visitor_team.full_name,
        homeScore: gameInfo.home_team_score,
        awayScore: gameInfo.visitor_team_score,
        season: gameInfo.season,
        stage: gameInfo.status,
        date: gameInfo.date.split(' ')[0],
      }
      setGameStats(filteredInfo)
      setLoading(false)
    } catch (err) {
      navigate("/error")
    }
  } //function to fetch GameStats data from API

  return (
    <div className='gameStats'>
      {!loading ?
        <Card key={gameStats.id} className='teamStatscard' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{gameStats.homeName} vs {gameStats.awayName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Result: {gameStats.homeScore} - {gameStats.awayScore} </Card.Subtitle>
            <Card.Text>
              Seasson: {gameStats.season}
              <br></br>
              Date: {gameStats.date}
              <br></br>
              Stage: {gameStats.stage}
            </Card.Text>
          </Card.Body>
        </Card> : <Spinner animation="border" variant="info" />}
    </div>
  )
}

export default GamesStats
