import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Games() {
    const params = useParams();
    const [games, setGames] = useState([]);

    useEffect(()=>{ 
  
      async function getTeamGamesFromApi(){
        const getTeamGames = await axios.get('http://localhost:3001/api/v1/games')
        const gamesList = getTeamGames.data.data
        console.log(gamesList)
        const filterdGames = gamesList.filter((game)=>{
            if (game.home_team.id == params.id || game.visitor_team.id == params.id){
              return game
            }
        })
        setGames(filterdGames)
      }
      getTeamGamesFromApi();
    },[])

  return (
    <div className='gamesPage'>
      {games && games.map((game)=>{
        return(
          
<Card key={game.id} className='gamecard' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{game.home_team.abbreviation} vs {game.visitor_team.abbreviation}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{game.date.split('T')[0]}</Card.Subtitle>
            <Link to={'/games/' + game.id}><button type="button" class="btn btn-danger">Statistics</button></Link>
          </Card.Body>
        </Card>
        )
    })}   
    </div>
  )
}

export default Games
