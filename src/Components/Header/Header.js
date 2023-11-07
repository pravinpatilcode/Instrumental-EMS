import React from 'react';
import './header.css';
import {AiOutlineSearch} from "react-icons/ai";
import { MdOutlineNotificationAdd} from "react-icons/md";
import User from '../../Assets/user.png'
const Header = () => {
  return (
    <header className="header">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
     
      <div style={{position:"relative"}}>
      <input type="text" className="form-control-header" id="EmailInput" name="EmailInput" placeholder="Search Here"   />
      <small id="emailHelp" ></small>
      <AiOutlineSearch className='search-icon-header'/>
    
      </div>

      <div style={{display:"flex",alignItems:"center",}}>

         <MdOutlineNotificationAdd className='notification'/>
      

          <div className='header_img'>
                <p className='user-name-header'>User Name Goes Here</p>
                <a href='#' className='user-name-header-link'>User </a>
          </div>

       <img src={User} className='header_user'/>
    
      
      </div>
      </div>
    </header>
  );
};

export default Header;
