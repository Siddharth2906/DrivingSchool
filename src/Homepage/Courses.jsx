import React from 'react'
import course1 from "../img/1.png"
import course2 from "../img/new44.png"
import course3 from "../img/pulsar1.png"
import { Phone, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useOutletContext } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Activa & Scooty Riding Lesson",
    price: "360 rupees",
    description: "Learn to drive without the stress of gear shifting. Our automatic car lessons are perfect for beginners and those who prefer a smooth, hassle-free driving experience",
    level: "Foundation Ride",
    duration: "10 days",
    adv_level: "Progressive Ride",
    adv_duration: "20 days",
    price: "Not Disclosed",
    image: course1
  },
  {
    id: 2,
    title: "Car Diriving Lesson",
    price: "360 rupees",
    description: "Gain confidence driving at higher speeds and managing traffic on highways. Our expert instructors will train you on safe lane changing, overtaking, and long-distance driving.",
    level: "Foundation Drive",
    duration: '10 days',
    adv_level: "Progressive Drive",
    adv_duration: "20 days",
    price: "Not Disclosed",
    image: course2
  },
  {
    id: 3,
    title: "Bike Riding Lesson",
    price: "360 rupees",
    description: "Master two-wheelers with ease — we offer guided training for scooters and motorcycles, focusing on control, safety, and real-world traffic skills.",
    level: "Foundation Ride",
    duration: "10 days",
    adv_level: "Progressive Ride",
    adv_duration: "20 days",
    price: "Not Disclosed",
    image: course3
  }
];
const Courses = () => {
  const context = useOutletContext();
  return (
    <>


      {/* Courses */}
      <div id='courses' className={`container mx-auto px-4 py-12 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} `}>
        <div className="text-center max-w-lg mx-auto mb-8">
          <h6 className="text-blue-600 font-bold uppercase mb-2">Trending Courses</h6>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Driving Courses</h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className={`${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-xl p-6 shadow-lg shadow-blue-500/10 border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300 flex flex-col h-full overflow-hidden`}>
              <div className="text-center p-4 pt-0">

                <h5 className="text-xl font-bold mb-3">{course.title}</h5>
                <p>{course.description}</p>
                <div className="flex justify-center mt-3 mb-3">

                  <div className="flex items-center mr-4">
                    <i className="fas fa-signal text-blue-600 mr-2"></i>
                    <small>{course.level}</small>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
                    <small>{course.duration}</small>
                  </div>
                  {/* <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-green-600 mr-2"></i>
                    <small>{course.price}</small>
                  </div> */}
                </div>

                <div className="flex justify-center mt-2 mb-0">
                  <div className="flex items-center mr-4">
                    <i className="fas fa-signal text-red-600 mr-2"></i>
                    <small>{course.adv_level}</small>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-red-600 mr-2"></i>
                    <small>{course.adv_duration}</small>
                  </div>
                  {/* <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-green-600 mr-2"></i>
                    <small>{course.price}</small>
                  </div> */}
                </div>
              </div>
              <div className="relative mt-auto">
                <img src={course.image} alt={course.title} className=" w-full  " style={{ maxHeight: '300px' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)] bg-opacity-40 flex flex-col items-center justify-center flex-row opacity-0 hover:opacity-100 transition-opacity">

                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-12 bg-blue-50  border-l-4 border-blue-500 p-6 rounded-lg">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600"> !! Special !!</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 font-bold  max-w-2xl mx-auto">
      We're proud to offer exclusive ladies-only training sessions with female trainers in our dedicated facility. 
        
            </p>
          </div>
        <h3 className="text-2xl font-bold text-blue-700  mb-2">Female-to-Female Driving Training Available</h3>
        <p className="text-gray-700 ">
  We understand the importance of comfort and confidence when learning to drive. That’s why we offer female-to-female driving training, where women learners are trained by experienced and professional female instructors. This supportive and secure environment helps many women feel more relaxed and empowered behind the wheel. Whether you are a beginner or looking to improve your driving skills, our female instructors are here to guide you every step of the way.
        </p>
      </div> */}
        {/* Appointment */}
        {/* <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-blue-600 text-white p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Make Appointment</h1>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input type="text" className="w-full p-3 border-0 rounded" placeholder="Your Name" />
                </div>
                <div>
                  <input type="email" className="w-full p-3 border-0 rounded" placeholder="Your Email" />
                </div>
                <div>
                  <input type="text" className="w-full p-3 border-0 rounded" placeholder="Courses Type" />
                </div>
                <div>
                  <input type="text" className="w-full p-3 border-0 rounded" placeholder="Car Type" />
                </div>
              </div>
              <div className="mb-4">
                <textarea className="w-full p-3 border-0 rounded" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-800 text-white py-3 px-4 rounded">Submit</button>
            </form>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Courses