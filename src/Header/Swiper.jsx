import React, { useEffect, useState } from 'react'
import img1 from "../img/carousel-1.jpg"
import img2 from "../img/carousel-2.jpg"
import img3 from "../img/new-4.jpg"
import { useOutletContext } from 'react-router-dom';
const Swiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
const context =useOutletContext();
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
 <>
   {/* Carousel */}
   <div className="relative">
        <div className="overflow-hidden">
          <div className="relative w-full transition-transform duration-700 ease-in-out" 
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="flex">
              <div className="min-w-full relative">
                <img src={img1} alt="Carousel Image" className="w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)]">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5 animate-fadeInDown">
                      Learn To Drive With Confidence
                    </h1>
                    <div>
                      <a href="#" className="inline-block bg-blue-600 text-white py-3 px-5 rounded">Learn More</a>
                      <a href="#" className="inline-block bg-white text-gray-800 py-3 px-5 rounded ml-3">Our Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-full relative">
                <img src={img3} alt="Carousel Image" className="w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)]">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5 animate-fadeInDown">
                      Learn To Drive With Confidence
                    </h1>
                    <div>
                      <a href="#" className="inline-block bg-blue-600 text-white py-3 px-5 rounded">Learn More</a>
                      <a href="#" className="inline-block bg-white text-gray-800 py-3 px-5 rounded ml-3">Our Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-full relative">
                <img src={img2} alt="Carousel Image" className="w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)]">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-5 animate-fadeInDown">
                      Safe Driving Is Our Top Priority
                    </h1>
                    <div>
                      <a href="#" className="inline-block bg-blue-600 text-white py-3 px-5 rounded">Learn More</a>
                      <a href="#" className="inline-block bg-white text-gray-800 py-3 px-5 rounded ml-3">Our Courses</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button 
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} bg-opacity-50 rounded-full p-2 hover:bg-opacity-75`}
          onClick={() => setCurrentSlide(prev => (prev - 1 + 2) % 3)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  bg-opacity-50 rounded-full p-2 hover:bg-opacity-75`}
          onClick={() => setCurrentSlide(prev => (prev + 1) % 3)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>
 </>
  )
}

export default Swiper