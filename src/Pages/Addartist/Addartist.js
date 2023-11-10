import React from 'react'
import './addartist.css'
import {AiFillCamera} from "react-icons/ai";
import { useState } from 'react';
function Addartist() {
  
    const [selectedGender, setSelectedGender] = useState(''); 

    const handleGenderChange = (event) => {
      setSelectedGender(event.target.value);
    };
    
    const handleCameraClick = () => {
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
    };


  return (
    <div className='addartist'>
     <div>
     <h1 className='artist-h1'>Add Artist</h1>
     <p className='artist-p'>Please fill out the bellow information to add artist</p>
     </div> <div className="line"></div>


      <div className='flex-addrtist'>
         <div className='image-addrtist'>
         <div className='camera-addrtist' onClick={handleCameraClick}>
         <AiFillCamera className='camera-height-addrtist' />
         <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <h4 className='yellow-color-addrtist'>Upload Your Pic</h4>
          </div>
          <div> 


           <div className='input_con_addartist'>
           <h2>Personal information</h2>
          <div className='common_div_addartist'>
           <div className='input_div_addartist'>
           <div>
              <label htmlFor="EmailInput" className='email1'>Artist name</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Artist name"/>
            </div>
           </div>
           
           <div className='input_div'>
           <div>
              <label htmlFor="EmailInput" className='email1'>Your email</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter email"/>
            </div>
           </div>
           </div>

        
          <div className='common_div'>
          <div className='input_div'>
          <div>
              <label htmlFor="EmailInput" className='email1'>Date of birth</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Select date of birth"/>
            </div>
          </div>
         <div className='gender'>
         <p>Select Gender</p>
          <div className="radio-button-container">
          <label className='radiobt-label'>
            <input className='radiobt-input'
              type="radio"
              value="male"
              checked={selectedGender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
    
          <label className='radiobt-label'>
            <input className='radiobt-input'
              type="radio"
              value="female"
              checked={selectedGender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
    
          <label className='radiobt-label'>
            <input className='radiobt-input yellow-radio'
              type="radio"
              value="other"
              checked={selectedGender === 'other'}
              onChange={handleGenderChange}
            />
            Other
          </label>
          </div> 
           </div>
          </div>
           <div> 
           
           Artist Territory
             
    <div className='flex-add-pitch'>
    
    <label className="dropdown">
    
    <p>Select Country</p>
    <div className="dd-button-addrtist">
    
    Select Country
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
    
  </label>
  
    <label className="dropdown">
    
    <p>Select City</p>
    <div className="dd-button-addrtist">
    
    Select City
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
    
  </label>
  </div>


   <p>Artist Bio</p>
   
      <input
        className="full-width-input"
        type="text"
        placeholder="Inter Artist Bio Here"
      />
    



    
    <h2>Artist Background</h2>
     

    <div className='flex-add-pitch'>
    
    <label className="dropdown">
    
    <p>Genre(s) of music</p>
    <div className="dd-button-addrtist">
    
    Select Genre of music
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
    
  </label>
  
    <label className="dropdown">
    
    <p>Yeare of Music Experience </p>
    <div className="dd-button-addrtist">
    
    Select Yeare of Music Experience 
    </div>
  
    <input type="checkbox" className="dd-input" id="test"/>
  
    <ul className="dd-menu">
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
    
  </label>
  </div>



      </div>

      <h2>Links</h2>
      <div className='common_div_addartist'>
      <div className='input_div_addartist'>
        <label for="EmailInput" className='email'>Instagram</label>
        <input type="text" className="form-control1 " id="EmailInput" name="EmailInput" placeholder="Enter Link Here" />
         <small id="emailHelp" ></small>
      </div>
      
      <div className='input_div'>
        <label for="EmailInput" className='email'>Facebook</label>
        <input type="text" className="form-control1 " id="EmailInput" name="EmailInput" placeholder="Enter Link Here" />
         <small id="emailHelp" ></small>
      </div>
      </div>

      <div>
      Link To Your Music(SoundCloud, Youtube, etc..)
         <input
           className="full-width-input-link"
           type="text"
           placeholder="Inter Links Here"
         />
      </div>
       
    </div>
    <div className='cancel-artist-btn'>
    Cancel
    <button type="submit" className="add-artist-btn">Add Artist</button>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Addartist