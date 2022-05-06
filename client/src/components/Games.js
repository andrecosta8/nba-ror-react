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
        const filterdGames = gamesList.filter((game)=>{
            return (game.home_team.abbreviation == params.abbreviation || game.visitor_team.abbreviation == params.abbreviation)
        })
        console.log(filterdGames)
        setGames(filterdGames)
      }
      getTeamGamesFromApi();
    },[])

  return (
    <div>
      {games && games.map((game)=>{
        return(
          <>
        <p key={game.id}>{game.id}</p>
        </>
        )
    })}   
    </div>
  )
}

export default Games