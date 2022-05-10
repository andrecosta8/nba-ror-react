import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function GamesStats() {
    const params = useParams();
    const [gameStats, setGameStats] = useState([]);

    useEffect(()=>{ 
      async function getStatsFromApi(){
        const getStats = await axios.get(`http://localhost:3001/api/v1/games/${params.id}`)
        const gameInfo = getStats.data
        console.log(gameInfo)
        setGameStats(gameInfo)
      }
      getStatsFromApi();
    },[])
  return (
    <div>
       <Card key={gameStats.id} className='teamStatscard' style={{ width: '18rem' }}>
      <Card.Body>
       <Card.Title>{gameStats.home_team.full_name} vs {gameStats.visitor_team.full_name}</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">Result: {gameStats.home_team_score} - {gameStats.visitor_team_score} </Card.Subtitle>
     <Card.Text>
       Seasson: {gameStats.season}
       <br></br>
        Date: {gameStats.date.split(' ')[0]}
       <br></br>
       Stage: {gameStats.status}
      </Card.Text>
    </Card.Body>
   </Card>
   </div>
  )
}

export default GamesStats
