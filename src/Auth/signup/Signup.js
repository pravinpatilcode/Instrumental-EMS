import React from 'react'
import "./signup.css"
import Img from '../../Assets/Background.jpg'
import { useState } from 'react';
import Music from '../../Assets/music.svg'
import { Link} from "react-router-dom"

function Signup() 
  {const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    
  return (
    <div >
      <div className='inner_container_div'>
          <img src={Img} className='signup_back'/>

        <div className='signup_form'>
   

        <div className='Instrumental'> <img src={Music} className='music'/>
       </div><br/>

        
        <div className='input_con'>
          <div className='common_div'>
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your Name</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Name" />
              <small id="emailHelp" ></small>
           </div>
           
           <div className='input_div'>
             <label for="EmailInput" className='email'>Your email</label>
             <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter email" />
              <small id="emailHelp" ></small>
           </div>
           </div>

        
          <div className='common_div'>
          <div className='input_div'>
            <label for="EmailInput" className='email'>Your Contact</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Contact" />
             <small id="emailHelp" ></small>
          </div>
          
          <div className='input_div'>
            <label for="EmailInput" className='email'>Your Address</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Address" />
             <small id="emailHelp" ></small>
          </div>
          </div>

          <div className='common_div_ex'>
          <div className='input_div'>
            <label for="EmailInput" className='email'>Registeded no.</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter number" />
             <small id="emailHelp" ></small>
          </div>
          </div>  


          <h3>Spotify</h3>
          <div className='common_div'>
          <div className='input_div'>
            <label for="EmailInput" className='email'>Set Passward</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter Passward" />
             <small id="emailHelp" ></small>
          </div>
          
          <div className='input_div'>
            <label for="EmailInput" className='email'>Passward</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Confirm Passward" />
             <small id="emailHelp" ></small>
          </div>
          </div><div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>click here to varify</label>
        </div>

          <h3>Deezer</h3>
          <div className='common_div'>
          <div className='input_div'>
            <label for="EmailInput" className='email'>Original I'D</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Inter Original I'D" />
             <small id="emailHelp" ></small>
          </div>
          </div><div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>click here to varify</label>
        </div>

          <h3>Amazon Music</h3>
          <div className='common_div'>
          <div className='input_div'>
            <label for="EmailInput" className='email'>Your email</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter email" />
             <small id="emailHelp" ></small>
          </div>
          
          <div className='input_div'>
            <label for="EmailInput" className='email'>Your Passward</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Passward" />
             <small id="emailHelp" ></small>
          </div>
          </div><div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange} className='checkbox' />
          <label>click here to varify</label>
        </div>


          <h3>Apple Music</h3>
          <div className='common_div' >
          <div className='input_div' style={{marginBottom:"40px"}}>
            <label for="EmailInput" className='email'>Your email</label>
            <input type="text" className="form-control" id="EmailInput" name="EmailInput" placeholder="Enter email" />
             <small id="emailHelp" ></small> 
          </div>
         
          </div> <Link to="/dashboard">
          <button type="submit" className="signup">SignUp</button></Link>
          
          </div>
         
        </div>
      </div>     
    </div>
  )

};
export default Signup