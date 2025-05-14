import React from 'react'
import img1 from "../img/carousel-1.jpg"
import Team from './Team'
const MainTeam = () => {
  return (
<>
 
                
<div className=" relative  my-6 mt-0 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
    <img src={img1} alt="Carousel Image" className="w-full h-110 object-cover" />
        <div className=" absolute inset-0 flex items-center justify-center  mx-auto text-center  bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)]">
          <h1 className="text-4xl md:text-6xl  text-white font-bold mb-5 animate-fadeInDown">Our Team</h1>
          
        </div>
      </div>
    <Team/>


</>
  )
}

export default MainTeam