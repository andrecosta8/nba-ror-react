import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function GamesStats() {
    const params = useParams();
    const [gameStats, setGameStats] = useState([]);

    useEffect(()=>{ 
      async function getStatsFromApi(){
        const getStats = await axios.get('http://localhost:3001/api/v1/stats')
        const statsList = getStats.data.data
        const filteredGameStats = statsList.find(elem => elem.game.id == params.id)
                    
        console.log(statsList, params.id, ">>>>>>>>" ,filteredGameStats)
        setGameStats(statsList)
      }
      getStatsFromApi();
    },[])
  return (
    <div>GamesStats</div>
  )
}

export default GamesStats