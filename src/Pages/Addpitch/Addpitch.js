import React from 'react'
import './addpitch.css';
import { Link } from 'react-router-dom';
import img4 from '../../Assets/user4.jpg';
import img5 from '../../Assets/user5.jpg';
import {IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import {IoCheckmarkDone } from "react-icons/io5";

function Addpitch() {
  return (
    <div >
      
       
    <div className='addpitchdropdown' >
    <div className='flex-add-pitch-top'>
    <h2>All Realease</h2>
    <Link to="/dashboard" className='text-decoration'>
    <h4  className='text-decoration'>Back to main page</h4> </Link>

    </div>
    <p className='small-font-addpitch'>Filtered By:</p>


    <div className='flex-add-pitch'>
    
    <label className="dropdown">
    <p className='small-font-addpitch'> DSP</p>
    
    <div className="dd-button">
    
     All
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
    
  </label>
    


    
    <label className="dropdown">
    <p className='small-font-addpitch'> Status</p>
    
    <div className="dd-button">
    
      Incomplete
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
    
  </label>

    
    <label className="dropdown">
  <p className='small-font-addpitch'> Sort-by</p>
    
    <div className="dd-button">
    Release Date
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul> 
    </label>
    </div><br/>
    <p className='small-font-addpitch'> 2 Result Found</p>

    </div>

    <div style={{padding:"10px"}}>
    <div className="card-pitch">
    <div className="image-container-pitch">
      <img
        src={img4}
        alt="Card Image"
        className="card-image-pitch"
      />
    </div>
    <div className="card-content-pitch">
      <h2 className='tital-pitch-card'>Jay Ho Jay Ho</h2>
      <div className='flex-card-content'>
        <div>
          <p className='small-font-addpitch'> Artist Name</p>
          <p className='small-font-addpitch'> Singel</p>
          <p className='small-font-addpitch'> Release Date</p>
          <p className='small-font-addpitch'> Status</p>
        </div>
        <div>
          <p className='small-font-addpitch'> Pravin Patil</p>
          <p className='small-font-addpitch'> Arijit Singh</p>
          <p className='small-font-addpitch'> 06/05/2000</p>
          <p className='small-font-addpitch'> <a href='#'>Not Completed Yet </a> </p>
        </div>
      </div>
    </div>
     
   
    <div className="buttons-pitch">
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
    <button className="buttons-pitch-card"> <IoCheckmarkDone /> Button 2</button>
     <div className='retry-pitch-div'><button  className="retry-pitch">Retry</button></div>
    </div> 
    </div>
    <div className="line"></div>
    <div>
    <div className="card-pitch">
    <div className="image-container-pitch">
      <img
        src={img5}
        alt="Card Image"
        className="card-image-pitch"
      />
    </div>
    <div className="card-content-pitch">
      <h2 className='tital-pitch-card'>Falling</h2>
      <div className='flex-card-content'>
        <div>
          <p className='small-font-addpitch'> Artist Name</p>
          <p className='small-font-addpitch'> Singel</p>
          <p className='small-font-addpitch'> Release Date</p>
          <p className='small-font-addpitch'> Status</p>
        </div>
        <div>
          <p className='small-font-addpitch'> Pravin Patil</p>
          <p className='small-font-addpitch'> yo yo honey</p>
          <p className='small-font-addpitch'> 01/06/2001</p>
          <p className='small-font-addpitch'> <a href='#'>Completed </a> </p>
        </div>
      </div>
    </div>
     
   
    <div className="buttons-pitch">
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
    <button className="buttons-pitch-card"> <IoCheckmarkDoneCircleSharp/> Button 2</button>
     <div className='retry-pitch-div'><button  className="retry-pitch">View</button></div>
    </div> 
     </div>
     <div className="line"></div>
  </div>

  </div>

    




    </div>
  )
}

export default Addpitch