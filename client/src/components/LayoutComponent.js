import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LayoutComponent() {
  return (
    <div>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className ="container-fluid">
        <Link to ="/"><button type="button" class="btn btn-primary">Home</button> </Link>
        <Link to ="/teams"><button type="button" class="btn btn-danger">See Teams</button></Link>
        <Outlet />
        </div>
        </nav>
        </div>
    </div>
    
  )
}

export default LayoutComponent


  
    
  

