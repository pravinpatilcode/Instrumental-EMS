import React from 'react';
import './header.css';
import {AiOutlineSearch} from "react-icons/ai";
import { MdOutlineNotificationAdd} from "react-icons/md";
import User from '../../Assets/user.png'
const Header = () => {
  return (
    <header className="header">
      <div> 
      <input type="text" className="form-control-header" id="EmailInput" name="EmailInput" placeholder="Search Here"   />
      <small id="emailHelp" ></small> <AiOutlineSearch 
    
      style={{
          width: 'auto',
          height: '30px',
          color: 'gray',
          position: 'absolute',
          left: '244px',
          top: '33px',
      }}
  />
      </div>


      <div className='left_header'><MdOutlineNotificationAdd className='notification'/>
      </div>
      <div className='header_img'><p className='user-name-header'>User Name Goes Here</p> <a href='#' className='user-name-header-link'>User Pravin</a>
      <div> 
      </div></div><img src={User} className='header_user'/>
    </header>
  );
};

export default Header;
