import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

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
    <div>
      {games && games.map((game)=>{
        return(
          <>
        <p key={game.id}>{game.id} {game.home_team.abbreviation} vs {game.visitor_team.abbreviation}</p>
        <Link to={'/games/' + game.id}>Stats</Link>
        </>
        )
    })}   
    </div>
  )
}

export default Games