import React from 'react'
import Swiper from '../Header/Swiper'
import Facts from './Facts'
import Features from './Features'
import About from './About'
import Courses from './Courses'
import DrivingTrainingAnimation from './DrivingTrainingAnimation'
import Team from './Team'
import Testimonal from './Testimonal'
import { useOutletContext } from 'react-router-dom'
import WhatsAppFormSubmission from './ContactUs'
import ContactSection from './ContactUs'
import SEO from '../seo/SEO'

const HeadPage = () => {
 const context =useOutletContext();
  return (
    <>
    <SEO/>
   <Swiper/>
 <Facts/>
 <Features/>
 <About/>
 <DrivingTrainingAnimation />
 <Courses/>
 
 <Team/>
 <Testimonal/>
 <ContactSection/>

    </>
  )
}

export default HeadPage