import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Players() {
    const params = useParams();
    const [players, setAllPlayers] = useState([]);

    useEffect(()=>{ 
      async function getPlayersFromApi(){
        const getPlayers = await axios.get('http://localhost:3001/api/v1/players')
        const playersList = getPlayers.data.data
        console.log(playersList)
        const filteredList = playersList.filter((player)=>{
            return (player.team.id == params.id)
        })
        console.log(filteredList)
        setAllPlayers(filteredList)
      }
      getPlayersFromApi();
    },[])

  return (
    <div>
        {players && players.map((player)=>{
        return(
          <>
        <p key={player.id}>{player.first_name} {player.last_name}</p>
        <Link to= {player.id + '/stats'}>Stats</Link>
        </>
        )
    })} </div>
  )
}

export default Players