import React from 'react'

import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import img1 from "../img/about-1.jpg"
import img2 from "../img/about-2.jpg"
import { useOutletContext } from 'react-router-dom';
const features = [
    { id: 1, title: "Fully Licensed", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos" },
    { id: 2, title: "Online Tracking", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos" },
    { id: 3, title: "Afordable Fee", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos" },
    { id: 4, title: "Best Trainers", description: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos" }
  ];

  const Features = () => {
  const context=useOutletContext()
  return (
   <>{/* Features */}
   {/* <div className="container  mx-auto px-4 py-12">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       <div>
         <h6 className="text-blue-600 font-bold uppercase mb-2">Why Choose Us!</h6>
         <h1 className="text-3xl md:text-4xl font-bold mb-4">Best Driving Training Agency In Your City</h1>
         <p className="mb-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {features.map(feature => (
             <div key={feature.id}>
               <div className="flex items-center mb-3">
                 <div className="flex-shrink-0 bg-blue-600 p-3 mr-3">
                   <Check size={16} className="text-white" />
                 </div>
                 <h5 className="font-bold">{feature.title}</h5>
               </div>
               <p>{feature.description}</p>
             </div>
           ))}
         </div>
       </div>
       <div className="relative overflow-hidden pt-5 pr-5" style={{ minHeight: '400px' }}>
         <img src={img1} alt="Features" className="absolute w-full h-full object-cover" />
         <img src={img2} alt="Features" className="absolute top-0 right-0 bg-white p-3 object-cover" style={{ width: '200px', height: '200px' }} />
       </div>
     </div>
   </div> */}
{/* Features Section */}
<section className= {` py-16 ${context.darkMode ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-900'} `}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={` ${context.darkMode ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-800 ' } text-3xl font-bold `}>Why Choose Us</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
            <p  className={` ${context.darkMode ? 'bg-gray-500 text-gray-200' : 'bg-gray-100 text-gray-600 ' } mt-4  max-w-2xl mx-auto `} >
              We provide the best driving education with experienced instructors and comprehensive courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-xl p-6 shadow-lg shadow-blue-500/10 border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300 text-center`}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Instructors</h3>
              <p className="text-gray-600">Our instructors have years of experience and are certified professionals.</p>
            </div>
            
            <div className={`${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-xl p-6 shadow-lg shadow-blue-500/10 border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300 text-center`}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First Approach</h3>
              <p className="text-gray-600">Safety is our top priority. We teach defensive driving techniques.</p>
            </div>
            
            <div className={`${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  text-center rounded-xl p-6 shadow-lg shadow-blue-500/10 border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300`}>
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">We offer flexible class schedules to accommodate your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Features