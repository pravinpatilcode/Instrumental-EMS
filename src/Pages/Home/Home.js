import React from 'react'
import "./home.css"
import Card from '../../Components/Common/Card/Card'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img from '../../Assets/user8.jpg'
import img6 from '../../Assets/user6.jpg'
import img1 from '../../Assets/user1.jpg'
import img2 from '../../Assets/user2.jpg'
import img3 from '../../Assets/user3.jpg'
import img4 from '../../Assets/user4.jpg'
import img5 from '../../Assets/user5.jpg'
import { BsMusicNoteBeamed } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"
function Home() { 
  let images=[
   img,img1,img2,img3,img4,img5,img6
  ]

  return (
    <div>
    <div style={{display:"flex",gap:10 , marginBottom:"10px"}}>
    <Card number={123} btnName={"Add Artist"} color="yellow"/>
    <Card number={333} btnName={"Withdrow"} color="blue"/>
    <Card number={177} btnName={"Start Here"} color="red"/>
    </div>

<div style={{display:"flex"}}>
    <h3 className='home-rtist-list'>Artist List</h3>
    <div><p className='home-add-music'>  <BsMusicNoteBeamed/> Add Artist</p></div>
</div>
    
    <div >
    
    <Swiper
    slidesPerView={4}>
    {images.map((slide, index) => (
      <SwiperSlide key={index} className='content-swiper'>
      <img src={slide} alt='' />
      <div className="content-overlay-swiper"></div>

      <div className="content-details-swiper fadeIn-bottom-swiper">
      <br/> <br/> <br/>
      <h3 className="content-title-swiper">This is a title</h3>
       <p className="content-text-swiper">This is a short description</p>
     </div>
      </SwiperSlide>
    ))}
    </Swiper>
     
      </div>
      <br/>
     <div className="full-line"></div>

      <div style={{display:"flex"}}><div>
    <h3 className='home-rtist-list'>Your Recent Pitches</h3></div>
    <p className='home-singles'>  Singles</p>
    <p > Albums</p>
     </div>
     <div className="line"></div><br/>
  <div style={{display:"flex"}}>
  <div>
  <img src={img6} className='home-pitch'/>
  <p className='home-pitch-name'>Music Name</p>
  </div>
  <div>
  <img src={img2} className='home-pitch'/>
  <p className='home-pitch-name'>Music Name</p>
  </div>
  </div>
 
 <div >  <Link to="addpitch"><button className='home-pitch-button'>Your Pitch</button></Link></div>


  </div>
  )
}

export default Home 