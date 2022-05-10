import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Teams() {

  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    async function getTeamsFromApi() {
      const getTeams = await axios.get('http://localhost:3001/api/v1/teams')
      const teamsList = getTeams.data.data
      console.log(teamsList)
      setAllTeams(teamsList)
    }
    getTeamsFromApi();
  }, [])

  return (
    <div className='teamspage'>
      {allTeams ? allTeams.map((team) => {
        return (<Card key={team.id} className='teamcard' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{team.full_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">City: {team.city}</Card.Subtitle>
            <Card.Text>
              Conference: {team.conference}
              <br></br>
              Division: {team.division}
            </Card.Text>
            <Link to={team.id + '/players'}><button type="button" class="btn btn-primary">Players</button></Link>
            <Link to={'games/' + team.id}><button type="button" class="btn btn-danger">Games</button></Link>
          </Card.Body>
        </Card>
        )
      }) : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
    </div>
  )
}

export default Teams

