import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';

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
    <div className='playersPage'>
        {players && players.map((player)=>{
        return(
          <Card key = {player.id} className='playercard' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title> {player.last_name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{player.first_name}</Card.Subtitle>
              <Link to= {player.id + '/stats'}><button type="button" class="btn btn-primary">Statistics</button></Link>
            </Card.Body>
          </Card>
        )
    })} </div>
  )
}

export default Players

