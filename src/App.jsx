import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Header/Navbar'
import DrivingSchoolHomepage from './Header/Topbar'
import React from 'react'
import Topbar from './Header/Topbar'
import Swiper from './Header/Swiper'
import Footer from './Footer/Footer'
import Features from './Homepage/Features'
import Facts from './Homepage/Facts'
import About from './Homepage/About'
import Courses from './Homepage/Courses'
import Team from './Homepage/Team'
import Testimonal from './Homepage/Testimonal'
import DrivingTrainingAnimation from './Homepage/DrivingTrainingAnimation'
import WhatsAppFormSubmission from './Homepage/ContactUs'
import { Outlet } from 'react-router-dom'
import MainAbout from './Homepage/MainTeam'
import ContactForm from './Homepage/MainCOntact'
import settheme from './Hook/settheme'
function App() {
  const [count, setCount] = useState(0)
 
const {darkMode , toggleDarkMode} = settheme()

// console.log(settheme)
  return(
    <>
   <Topbar/>
   <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
   <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
  <Outlet context={{darkMode}}/>
 </div>
 <Footer darkMode={darkMode} />
{/* <WhatsAppFormSubmission/> */}

    </>
  )
}

export default App
