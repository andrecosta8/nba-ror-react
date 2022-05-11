import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'

function Players() {
  const params = useParams(); // for holding params from Links
  const [players, setAllPlayers] = useState([]); // for holding data from Players fetched from Server
  const [loading, setLoading] = useState(true) // useful for loading spinner feature
  const navigate = useNavigate() // navigation hook

  useEffect(() => {
    getPlayersFromApi();
  }, []) // only called when app is loaded for the first time

  async function getPlayersFromApi() {
    try {
      const getPlayers = await axios.get('http://localhost:3001/api/v1/players')
      const playersList = getPlayers.data.data
      const filteredList = playersList.filter((player) => {
        return (player.team.id == params.id)
      })
      setAllPlayers(filteredList)
      setLoading(false)
    } catch (err) {
      navigate("/error")
    }
  } //function to fetch Players data from API

  return (
    <div className='playersPage'>
      {!loading ? players.map((player) => {
        return (
          <Card key={player.id} className='playercard' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{player.last_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{player.first_name}</Card.Subtitle>
              <Link to={player.id + '/stats'}><button type="button" class="btn btn-primary">Statistics</button></Link>
            </Card.Body>
          </Card>
        )
      }) : <Spinner animation="border" variant="info" />}
    </div>
  )
}

export default Players

