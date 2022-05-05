import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function LayoutComponent() {
  return (
    <div>
        <Link to ="/">Home </Link>
        <Link to ="/teams">Teams </Link>
        <Outlet />

    </div>
  )
}

export default LayoutComponent