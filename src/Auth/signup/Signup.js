import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import Img from '../../Assets/Background.jpg';
import Music from '../../Assets/music.svg';
function Signup() {
 
  {const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

  return (
    <div>
      <div className="inner_container_div">
        <img src={Img} className="signup_back" alt="background" />

        <form className="signup_form" >
          <div className="Instrumental">
            <img src={Music} className="music" alt="music" />
          </div>
          <br />

          <div className="input_content">
            <div className="common_div">
            <div>
            <label htmlFor="EmailInput" className='input-div'>Label Name</label>
            <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Label Name Goes Here"  />
          </div>

              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'>Label Email</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter email Here"  />
            </div>
              </div>
            </div>
            <div className="common_div">
              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'>Content Number</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter Content Number"  />
            </div>
              </div>

              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'>Address</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter Address Here"  />
            </div>
              </div>
            </div>
            <div className="input_div">
            <div>
            <label htmlFor="EmailInput" className='input-div'>Resistration Number</label>
            <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter Resistration Number"  />
          </div>
          </div>
            
            

            
            <h3>Spotify</h3>
            <div className="common_div">
              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'> Email</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder=" email"  />
            </div>
              </div>
              <div>
              <label htmlFor="EmailInput" className='input-div'>Passward</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Passward"  />
            </div>
         

            </div>
            <div>
            <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkmark"
          />
          <label>click here to varify</label>
        </div>
            
          </div>


          <h3>Deezer</h3>
            <div className="common_div">
              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'>Your email</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter email"  />
            </div>
              </div>
          
            </div>
            <div>
            <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkmark"
          />
          <label>click here to varify</label>
        </div>
            
          </div>

          <h3>Amazon Music</h3>
            <div className="common_div">
              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'>Your email</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter email"  />
            </div>
              </div>
              <div>
              <label htmlFor="EmailInput" className='input-div'>Password</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Password"  />
            </div>
         

            </div>
            <div>
            <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkmark"
          />
          <label>click here to varify</label>
        </div>
            
          </div>

          <h3>Apple Music</h3>
            <div className="common_div">
              <div className="input_div">
              <div>
              <label htmlFor="EmailInput" className='input-div'>Password</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Password"  />
            </div>
              </div>
              
            </div>
          </div>
<br/>
          <Link to="/dashboard" className='link-add'>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
}
export default Signup;
