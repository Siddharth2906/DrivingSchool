import React from 'react'
import img1 from "../img/coursel-4.jpg"
import Team from './Team'
import About from './About'
import Courses from './Courses'
import Testimonal from './Testimonal'
import { useOutletContext } from 'react-router-dom'
const MainTestimonal = () => {

   const context =useOutletContext();
 
  return (
<>
 
                
<div className="  min-w-full relative my-6  mt-0 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
    <img src={img1} alt="Carousel Image" className="w-full h-110 object-cover" />
        <div className=" absolute inset-0 flex  items-center justify-center mx-auto text-center  bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)]">
          <h1 className="text-4xl md:text-6xl  text-white font-bold mb-5 animate-fadeInDown">Testimonal</h1>
          
        </div>
      </div>
    <Testimonal darkmode={context.darkmode}/>
<Team/>

</>
  )
}

export default MainTestimonal