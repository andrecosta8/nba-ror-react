import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function PlayerStats() {
    const params = useParams();
    const [playerStats, setPlayerStats] = useState([]);

    useEffect(()=>{ 
      async function getStatsFromApi(){
        const getStats = await axios.get('http://localhost:3001/api/v1/stats')
        const statsList = getStats.data.data
        const filteredPlayerStats = statsList.filter(elem => {
         
        })
         
          //console.log(filteredPlayerStats)
        setPlayerStats(statsList)
      }
      getStatsFromApi();
    },[])

  return (
    <div>PlayerStats</div>
  )
}

export default PlayerStats