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
        const getStats = await axios.get(`http://localhost:3001/api/v1/games/${params.id}`)
        const gameStats = getStats.data
        console.log(gameStats)
        setGameStats(gameStats)
      }
      getStatsFromApi();
    },[])
  return (
    <div>GamesStats</div>
  )
}

export default GamesStats