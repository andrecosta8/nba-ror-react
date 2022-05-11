import React from 'react'
import image from '../images/logo-nba.png'
import Spinner from 'react-bootstrap/Spinner'

function Home() {
  return (
    <div>
      {image ? <img src={image} className="img-fluid" alt="nba"></img> :
        <Spinner animation="border" variant="info" />
      }
    </div>
  )
} //Home page image

export default Home
