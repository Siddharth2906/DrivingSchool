import { useState } from "react";
import { Phone, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React from 'react'
import img1 from "../img/carousel-1.jpg"
export default function DrivingSchoolHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  
  const slides = [
    {
      title: "Learn To Drive With Confidence",
      image: img1
    },
    {
      title: "Professional Driving Instructors",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Affordable Driving Packages",
      image: "/api/placeholder/1200/600"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

 

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">123 Street, New York, USA</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">Mon - Fri : 09:00 AM - 09:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span className="text-sm">+012 345 6789</span>
            </div>
            <div className="flex space-x-2">
              <Facebook size={16} className="cursor-pointer" />
              <Twitter size={16} className="cursor-pointer" />
              <Linkedin size={16} className="cursor-pointer" />
              <Instagram size={16} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <span className="text-yellow-400 text-4xl mr-2">🚗</span>
            <span className="text-blue-900 font-bold text-2xl">Drivin</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-yellow-500 font-medium">HOME</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">ABOUT</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">COURSES</a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium flex items-center">
                PAGES <ChevronDown size={16} className="ml-1" />
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-yellow-500 font-medium">CONTACT</a>
          </div>
          <button className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-6 rounded items-center">
            Get Started <ArrowRight size={16} className="ml-2" />
          </button>
          <button className="md:hidden text-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="relative w-full overflow-hidden" style={{ height: "500px" }}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
              <h1 className="text-4xl md:text-6xl font-bold text-center px-4">
                {slide.title}
              </h1>
              <div className="mt-8 flex space-x-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-3 px-6 rounded">
                  Learn More
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-800 py-3 px-6 rounded">
                  Our Courses
                </button>
              </div>
            </div>
          </div>
        ))}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full z-30"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full z-30"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide the best driving education with experienced instructors and comprehensive courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Instructors</h3>
              <p className="text-gray-600">Our instructors have years of experience and are certified professionals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First Approach</h3>
              <p className="text-gray-600">Safety is our top priority. We teach defensive driving techniques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Driving Courses</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our variety of driving courses designed to meet your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/250" alt="Beginner Course" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beginner's Course</h3>
                <p className="text-gray-600 mb-4">Perfect for first-time drivers who want to learn from scratch.</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold text-xl">$299</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/250" alt="Defensive Driving" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Defensive Driving</h3>
                <p className="text-gray-600 mb-4">Learn advanced techniques to stay safe on the road.</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold text-xl">$199</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/250" alt="Highway Driving" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Highway Confidence</h3>
                <p className="text-gray-600 mb-4">Specialized training for highway and freeway driving situations.</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold text-xl">$149</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        
          <div className="text-center mt-10">
            <button className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-8 rounded inline-flex items-center">
              View All Courses <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}