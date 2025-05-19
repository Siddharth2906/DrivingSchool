import React, { useEffect, useState } from 'react'
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import img1 from "../img/user.png"
import img2 from "../img/user.png"
import img3 from "../img/user.png"
import { useOutletContext } from 'react-router-dom';
const testimonials = [
  {
    id: 1,
    content: "I had an excellent experience with Priyanshi Driving School! The instructors were patient, professional, and extremely knowledgeable.",
    name: "Aarav Mehta",
    profession: "Student",
    image: img1
  },
  {
    id: 2,
    content: "What I appreciated most was how they tailored the lessons to my learning pace. The cars were clean and well-maintained, and scheduling classes was easy and flexible.",
    name: "Ritika Sharma",
    profession: "Graphic Designer",
    image: img2
  },
  {
    id: 3,
    content: "I highly recommend Priyanshi Driving School to anyone looking to learn how to drive safely and confidently. Thank you for making this journey so smooth and enjoyable!",
    name: "Vikram Patel",
    profession: "Software Engineer",
    image: img3
  },
  {
    id: 4,
    content: "Learning to drive felt intimidating at first, but the instructors made it incredibly comfortable and fun. I passed my test on the first try!",
    name: "Sneha Joshi",
    profession: "College Student",
    image: img1
  },
  {
    id: 5,
    content: "The classroom sessions were informative and well-structured. I especially liked how road safety and real-world scenarios were explained clearly.",
    name: "Rahul Verma",
    profession: "Bank Officer",
    image: img1
  },
  {
    id: 6,
    content: "My instructor was always punctual and had a calm demeanor, which helped ease my nervousness. I’m now a confident driver thanks to them!",
    name: "Neha Kapoor",
    profession: "Entrepreneur",
    image: img1
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

    useEffect(() => {
        const interval = setInterval(() => {
       setCurrentTestimonial(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
      }, []);
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
           <div className="relative mb-8">
             <img 
               src={testimonials[currentTestimonial].image} 
               alt={testimonials[currentTestimonial].name} 
               className="rounded-full mx-auto w-35 h-35"
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
         {/* <button 
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
         </button> */}
       </div>
     </div>
   </div>
 </div>
 </>
  )
}

export default Testimonal