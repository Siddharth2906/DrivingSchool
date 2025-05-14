
import React, { useState, useEffect } from 'react';
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle, Sun, Moon } from 'lucide-react';
import logo from "../img/Logo1.png"
import { Link } from 'react-router-dom';
// Mock data

const Navbar = ( {darkMode,toggleDarkMode}) => {
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 
  return (
    <div className="font-sans bg-white text-gray-700">
      {/* Spinner */}
      {/* Uncomment for production */}
      {/* <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div> */}

      
      {/* Navbar */}
      <nav className= {` sticky top-0 z-40 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} `}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <a href="#" className="flex items-center border-r border-gray-200 py-4 px-4 lg:px-5">
              <h2 className="text-2xl font-bold m-0">
              <img src={logo} alt="" className='w-20 '/>
              </h2>
            </a>
            <button 
              className="lg:hidden flex items-center py-4 px-4"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`${isNavOpen ? 'block' : 'hidden'} lg:flex lg:items-center absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none`}>
              <div className="flex flex-col lg:flex-row p-4 lg:p-0">
                <Link to="/" className='py-2 px-4 lg:px-4 hover:text-blue-800'>Home</Link>
             <Link to="/about" className='py-2 px-4 lg:px-4 hover:text-blue-800'>About</Link>
             <Link to="/courses" className='py-2 px-4 lg:px-4 hover:text-blue-800'>Courses</Link>
               
                <div className="relative group py-2 px-4 lg:px-4">
                  <a href="#" className=" hover:text-blue-600 flex items-center">
                    Pages
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className={`hidden group-hover:block absolute left-0 mt-2 ${darkMode ? ' bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-sm z-10 w-40`}>
                    <Link to="/features" className={`block px-4 py-2 ${darkMode ? '  text-white  hover:bg-gray-600 ' : 'text-gray-700 hover:bg-gray-100'}`}>Features</Link>
                    <Link to="/cpntact-us" className={`block px-4 py-2 ${darkMode ? '  text-white  hover:bg-gray-600 ' : 'text-gray-700 hover:bg-gray-100'}`}>Appointment</Link>
                    <Link to="/our-team" className={`block px-4 py-2 ${darkMode ? '  text-white  hover:bg-gray-600 ' : 'text-gray-700 hover:bg-gray-100'}`}>Our Team</Link>
                    <Link to="/testimonal" className={`block px-4 py-2 ${darkMode ? '  text-white  hover:bg-gray-600 ' : 'text-gray-700 hover:bg-gray-100'}`}>Testimonal</Link>
                    <Link to="/company" className={`block px-4 py-2 ${darkMode ? '  text-white  hover:bg-gray-600 ' : 'text-gray-700 hover:bg-gray-100'}`}>404 Page</Link>
                  </div>
                </div>
                <Link to="/contact-us" className='py-2 px-4 lg:px-4 hover:text-blue-800'>Contact</Link>
              </div>
            </div>
            <button 
          onClick={toggleDarkMode}
          className={`h-15 w-15 my-auto rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}  flex items-center justify-center transition-colors duration-300`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="text-yellow-400 w-5 h-5" />
          ) : (
           <Moon className="text-blue-400 w-5 h-5" />
          )}
        </button>
          </div>
        </div>
      </nav>

      </div>)}
      export default Navbar