import React from 'react'
import "./home.css"
import Card from '../../Components/Common/Card/Card'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img6 from '../../Assets/user6.jpg'
import img2 from '../../Assets/user2.jpg'
import { BsMusicNoteBeamed } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"
import  { useState, useEffect } from 'react'

function Home() { 
  const [Images, setImages] = useState([])
    
   

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://picsum.photos/v2/list');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setImages(jsonData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
console.log(Images)


  // let images=[
  //  img,img1,img2,img3,img4,img5,img6
  // ]

  return (
    <div>
    <div style={{display:"flex",gap:20 ,width:"96%",margin:"auto", marginBottom:"10px"}}>
    <Card number={123}  btnName={"Add Artist"} color="yellow"/>
    <Card number={333} btnName={"Withdrow"} color="blue"/>
    <Card number={177} btnName={"Start Here"} color="red"/>
    </div>

<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0px 25px"}}>
    <h3 className='home-rtist-list'>Artist List</h3>
    <div> <BsMusicNoteBeamed/> Add Artist</div>
</div>
    
    <div >
    
    <Swiper
    slidesPerView={4} style={{borderRadius:"10px"}}>
    {Images.map((item,i) => (
      <SwiperSlide key={item} className='content-swiper'>
      <img src={item.download_url}   alt=''  
      // style={{borderRadius:" 15px ", objectFit:"cover"}}
       />
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
      <div className="line"></div>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0px 25px"}}><div>
    <h3 className='home-rtist-list'>Your Recent Pitches</h3></div>
     <div style={{display:"flex" , gap:"10px"}}><p className='home-singles'>  Singles</p>
    <p > Albums</p>
     </div>
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