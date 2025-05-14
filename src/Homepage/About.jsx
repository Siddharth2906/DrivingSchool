import React from 'react'
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import img1 from "../img/about-1.jpg"
import img2 from "../img/courses-1.jpg"
import { useOutletContext } from 'react-router-dom';
const About = () => { 
 const context =useOutletContext();
//  console.log(context.darkMode)
  return (
   <>{/* About */}
   <div className={`container mx-auto px-4 py-12 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} `}>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       <div className="relative overflow-hidden pt-5 pl-5" style={{ minHeight: '400px' }}>
         <img src={img2} alt="About" className="absolute w-full h-full object-cover" />
         <img src={img1} alt="About" className={`absolute top-0 left-0 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} p-3`} style={{ width: '200px', height: '200px' }} />
       </div>
       <div>
         <h6 className="text-blue-600 font-bold uppercase mb-2">About Us</h6>
         <h1 className="text-3xl md:text-4xl font-bold mb-4">We Help Students To Pass Test & Get A License On The First Try</h1>
         <p>At our driving school, we are committed to helping students succeed with confidence. Our structured training programs and experienced instructors ensure that learners are fully prepared to pass their driving test and obtain their license on the first attempt.</p>
         <p className="mb-4">Whether you're a beginner or need a refresher, our personalized lessons are designed to match your pace and comfort. With a supportive learning environment and the right guidance, getting on the road has never been easier.</p>
         <div className="grid grid-cols-2 gap-2 mb-4">
           <div>
             <Check size={16} className="text-blue-600 inline mr-2" />
             Fully Licensed
           </div>
           <div>
             <Check size={16} className="text-blue-600 inline mr-2" />
             Online Tracking
           </div>
           <div>
             <Check size={16} className="text-blue-600 inline mr-2" />
             Afordable Fee
           </div>
           <div>
             <Check size={16} className="text-blue-600 inline mr-2" />
             Best Trainers
           </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <a href="#" className="bg-blue-600 text-white text-center py-3 px-5 rounded">Read More</a>
           <a href="tel:+0123456789" className="flex items-center border-2 border-blue-600 p-2 rounded">
             <span className="flex-shrink-0 bg-blue-600 p-2 mr-2">
               <Phone size={16} className="text-white" />
             </span>
             <span>+012 345 6789</span>
           </a>
         </div>

       </div>
       
     </div>
   </div>

   </>
  )
}

export default About