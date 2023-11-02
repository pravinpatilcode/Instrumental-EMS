import React, { useState } from 'react';
import './sidebar.css';
import Music from '../../Assets/music.png'
import { AiOutlineHome} from 'react-icons/ai'; 
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineWallet } from 'react-icons/ai'; 
import { CiSettings } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const [activeItem, setActiveItem] = useState(null);

  const items = [

    {icon:<AiOutlineHome className='icon'/> ,item:"Home",path:""},
    {icon:<BsMusicNoteBeamed className='icon'/>,item:"Add New Pitch",path:"addpitch"},
    {icon:<AiOutlineWallet className='icon'/>  ,item:"Payment",path:"payment"},
    {icon:<CiSettings className='icon'/>  ,item:"Setting",path:"setting"},
  ];

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="sidebar">
    <div className='main_Instrumental'> <img src={Music} className='main_music'/>
    <h1 className='main_music_text'>Instrumental</h1><br/></div>
    <ul>
      {items.map((item, index) => (
       <Link to={`/dashboard/${item.path}`} style={{textDecoration:"none"}}> <li
          key={index}
          className={`icon-fixes ${activeItem === item?.path ? 'active' : ''}`}
          onClick={() => handleClick(item)}
        >
          {item.icon} {item.item}
        </li>
        </Link>
      ))}
    </ul>
    </div>
  );
};

export default Sidebar;
