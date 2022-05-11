import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Card, Spinner } from 'react-bootstrap';

function PlayerStats() {
  const params = useParams(); // for holding params from Links
  const [playerStats, setPlayerStats] = useState([]); // for holding data from PlayerStats fetched from Server
  const [loading, setLoading] = useState(true); // useful for loading spinner feature
  const navigate = useNavigate() // navigation hook

  useEffect(() => {
    getStatsFromApi();
  }, []) // only called when app is loaded for the first time

  async function getStatsFromApi() {
    try {
      const getStats = await axios.get(`http://localhost:3001/api/v1/players/${params.id}/stats`)
      const statsList = getStats.data.data
      setPlayerStats(statsList)
      setLoading(false)
    } catch (err) {
      navigate("/error")
    }
  } //function to fetch PlayerStats data from API

  return (
    <div className='playerStatsPage'>
      {!loading ? playerStats.map((elem) => {
        return (
          <Card key={elem.id} className='teamcard' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{elem.game.date.split('T')[0]}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{elem.player.first_name} {elem.player.last_name}<br></br>{elem.team.name}</Card.Subtitle>
              <Card.Text>
                Minutes played: {elem.min} min
                <br></br>
                Points: {elem.pts}
                <br></br>
                Rebounds: {elem.reb}
                <br></br>
                Steals: {elem.stl}
                <br></br>
                Turnovers: {elem.turnover}
                <br></br>
                3Pts Made: {elem.fg3m}
                <br></br>
                2Pts Made: {elem.fgm}
                <br></br>
                Free Throws Made: {elem.ftm}
                <br></br>
                Assists: {elem.ast}
                <br></br>
                Blocks: {elem.blk}
                <br></br>
                Personal Faults: {elem.pf}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      }) : <Spinner animation="border" variant="info" />}
    </div>
  )
}

export default PlayerStats

