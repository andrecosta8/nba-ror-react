import React from 'react'
import image from '../images/logo-nba.png'
import { Spinner } from 'react-bootstrap'

function Home() {
  return (
    <div>
      {image ? <img src={image} class="img-fluid" alt="nba"></img> : <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> }
      
    </div>
  )
}

export default Home
