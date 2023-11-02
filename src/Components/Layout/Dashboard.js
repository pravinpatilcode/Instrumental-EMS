import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './dashboard.css'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div style={{display:"flex"}}>
    
      <Sidebar/>
   

    <div style={{width:"82%"}}>
    <Header/>
    
    <Outlet/>
   
    </div>
    </div>
  )
}

export default Dashboard