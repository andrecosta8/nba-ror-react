import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function Teams() {

    const [allTeams, setAllTeams] = useState([]);

    useEffect(()=>{ 
      async function getTeamsFromApi(){
        const getTeams = await axios.get('http://localhost:3001/api/v1/teams')
        const teamsList = getTeams.data.data
        
        setAllTeams(teamsList)
      }
      getTeamsFromApi();
    },[])

  return (
    <div>
       
        {allTeams && allTeams.map((team)=>{
            return(
            <p key = {team.id}>{team.full_name}</p>
            )
        })} 
    </div>
  )
}

export default Teams