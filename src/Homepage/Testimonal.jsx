import React, { useState } from 'react'
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import img1 from "../img/testimonial-1.jpg"
import img2 from "../img/testimonial-2.jpg"
import img3 from "../img/testimonial-3.jpg"
import { useOutletContext } from 'react-router-dom';
const testimonials = [
    {
      id: 1,
      content: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Client Name",
      profession: "Profession",
      image: img1
    },
    {
      id: 2,
      content: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Client Name",
      profession: "Profession",
      image: img2
    },
    {
      id: 3,
      content: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Client Name",
      profession: "Profession",
      image:img3
    }
  ];
const Testimonal = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const handleNextTestimonial = () => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    };
  
    const handlePrevTestimonial = () => {
      setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
    };
  const context=useOutletContext()
  return (
 <>{/* Testimonials */}
 <div className={`container mx-auto px-4 py-12  ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
   <div className="text-center max-w-lg mx-auto mb-8">
     <h6 className="text-blue-600 font-bold uppercase mb-2">Testimonial</h6>
     <h1 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say!</h1>
   </div>
   <div className="flex justify-center">
     <div className="max-w-2xl w-full">
       <div className="relative">
         <div className="text-center">
           <div className="relative mb-6">
             <img 
               src={testimonials[currentTestimonial].image} 
               alt={testimonials[currentTestimonial].name} 
               className="rounded-full mx-auto w-24 h-24"
             />
             <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full shadow-md" style={{ width: '60px', height: '60px' }}>
               <MessageCircle size={24} className="text-blue-600" />
             </div>
           </div>
           <p className="text-lg mb-4">{testimonials[currentTestimonial].content}</p>
           <hr className="w-24 mx-auto my-4" />
           <h5 className="font-bold">{testimonials[currentTestimonial].name}</h5>
           <span>{testimonials[currentTestimonial].profession}</span>
         </div>
         <button 
           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
           onClick={handlePrevTestimonial}
         >
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
         </button>
         <button 
           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
           onClick={handleNextTestimonial}
         >
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
           </svg>
         </button>
       </div>
     </div>
   </div>
 </div>
 </>
  )
}

export default Testimonal