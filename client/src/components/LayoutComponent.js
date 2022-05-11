import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function LayoutComponent() {
  return (
    <div className='layoutComponent'>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/"><button type="button" className="btn btn-primary">Home</button> </Link>
            <Link to="/teams"><button type="button" className="btn btn-danger">See Teams</button></Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>

  )
} // Component that will be use in all application pages

export default LayoutComponent



