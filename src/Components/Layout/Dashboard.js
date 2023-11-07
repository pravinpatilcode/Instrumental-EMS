import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './dashboard.css'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div style={{display:'flex'}}>

    <div style={{border:"1px solid gray",width:"15%",height:"99.5vh"}}>
    <Sidebar/>
    </div>
    <div style={{width:"85%",height:"99.5vh",overflow:"auto"}}>
    <Header/>
    
     <Outlet/>
    </div>
    </div>

  )
}

export default Dashboard