import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';

function Teams() {

  const [allTeams, setAllTeams] = useState([]); // for holding data from Teams fetched from Server
  const [loading, setLoading] = useState(true); // useful for loading spinner feature
  const navigate = useNavigate() // navigation hook

  useEffect(() => {
    getTeamsFromApi();
  }, []) // only called when app is loaded for the first time


  async function getTeamsFromApi() {
    try {
      const getTeams = await axios.get('http://localhost:3001/api/v1/teams')
      const teamsList = getTeams.data.data
      setAllTeams(teamsList)
      setLoading(false)
    } catch (err) {
      navigate("/error")
    }
  } //function to fetch Teams data from API

  return (
    <div className='teamspage'>
      {!loading ? allTeams.map((team) => {
        return (<Card key={team.id} className='teamcard' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{team.full_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">City: {team.city}</Card.Subtitle>
            <Card.Text>
              Conference: {team.conference}
              <br></br>
              Division: {team.division}
            </Card.Text>
            <Link to={team.id + '/players'}><button type="button" className="btn btn-primary">Players</button></Link>
            <Link to={'games/' + team.id}><button type="button" className="btn btn-danger">Games</button></Link>
          </Card.Body>
        </Card>
        )
      }) : <Spinner animation="border" variant="info" />
      }
    </div>
  )
}

export default Teams

