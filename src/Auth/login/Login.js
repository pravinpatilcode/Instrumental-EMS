import React, { useState } from 'react';
import "./login.css";
import Img from '../../Assets/Background.jpg';
import Music from '../../Assets/music.png';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const loginSubmit = (event) => {
    event.preventDefault();

    let formIsValid = true;

    if (username.trim() === '') {
      setEmailError('Please enter your email');
      formIsValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password');
      formIsValid = false;
    } else {
      setPasswordError('');
    }

    if (formIsValid) {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <div className='inner_container'>
        <img src={Img} className='img-back' />
        <div className='mid-container1'>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Please enter your email and password</h2>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}
          <div className='Instrumental'>
            <img src={Music} className='music' />
            <h1>Instrumental</h1><br />
          </div>
          <div className='Instrumental'>
            <h1>Log in to your Account</h1>
          </div>
          <form className='form' onSubmit={loginSubmit}>
            <div>
              <label htmlFor="EmailInput" className='email1'>Your email</label>
              <input type="text" className="form-control1" id="EmailInput" name="EmailInput" placeholder="Enter email" onChange={(event) => setUsername(event.target.value)} value={username} />
            </div>
            <br />
            <div className="form-group1">
              <label htmlFor="exampleInputPassword1" className='email1'>Password</label>
              <input type="password" className="form-control1" id="exampleInputPassword1" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} />
            </div>
            <a href="#" className="forgot">Forgot password?</a>
            <br /><br />
            <button type="submit" className="signin">SignIn</button>
          </form>
          <div className='signing_first_time'>
            <p>signing in for the first time? <Link to="/signup"><a href='#'>Click Here</a></Link> </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
