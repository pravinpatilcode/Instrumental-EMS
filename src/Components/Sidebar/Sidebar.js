import React, { useState } from 'react';
import './sidebar.css';
import Music from '../../Assets/music.svg'
import { AiOutlineHome} from 'react-icons/ai'; 
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineWallet } from 'react-icons/ai'; 
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const [activeItem, setActiveItem] = useState(""); 

  const items = [
    { icon: <AiOutlineHome className='icon' />, item: "Home", path: "" },
    { icon: <BsMusicNoteBeamed className='icon' />, item: "Add New Pitch", path: "addpitch" },
    { icon: <AiOutlineWallet className='icon' />, item: "Payment", path: "payment" },
    { icon: <CiSettings className='icon' />, item: "Settings", path: "settings" },
  ];

  const handleClick = (item) => {
    setActiveItem(item.path);
  };  

  return (
    <>
    <div className="sidebar">
      <div className='main_Instrumental'>
        <img src={Music} className='main_music' alt="Music" />
        <br />
      </div>
      <div className="sidebar-line"></div>

      <ul>
        {items.map((item, index) => (
          <Link to={`/dashboard/${item.path}`} key={index} style={{ textDecoration: "none" }}>
            <li
            style={{display:"flex",alignItems:"center"}}
              className={activeItem === item.path ? 'active' : ''}
              onClick={() => handleClick(item)} >
              {item.icon} {item.item}
            </li>
          </Link>
  ))}
      </ul>
    </div>

    </>
  );
};

export default Sidebar;
