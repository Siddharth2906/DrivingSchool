import React, { useState } from 'react'
import { ChevronUp, MapPin,ArrowDown, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle ,ArrowRight} from 'lucide-react';
import logo from "../img/Logo1.png"
import { Link, useOutletContext } from 'react-router-dom';

const Footer = ({darkMode}) => {
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
        alert("Thank you for subscribing!");
        setEmail("");
      };
  
  return (
  <>
        

  <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} text-gray py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-4xl mr-2"> <img src={logo} alt="" className='w-28 '/></span>
               
              </div>
            
              <div className="flex space-x-3">
                <a href="#" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  bg-opacity-20 p-2 rounded hover:bg-opacity-30`}>
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/vandana_cilogiya?utm_source=qr&igsh=MTJ1OGt0N3dscHZsNQ==" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  bg-opacity-20 p-2 rounded hover:bg-opacity-30`}>
                  <Twitter size={18} />
                </a>
                <a href="https://www.instagram.com/vandana_cilogiya?utm_source=qr&igsh=MTJ1OGt0N3dscHZsNQ==" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  bg-opacity-20 p-2 rounded hover:bg-opacity-30`}>
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/vandana_cilogiya?utm_source=qr&igsh=MTJ1OGt0N3dscHZsNQ==" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} bg-opacity-20 p-2 rounded hover:bg-opacity-30`}>
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="flex items-start mb-3">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                <span>53, Sethi Sambandh Nagar MR 9 Road near by Sai Sampada, Indore</span>
              </div>
              <div className="flex items-center mb-3">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+91 6266774711, +91 9893682072</span>
              </div>
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>priyanshidrivingschoolindore20@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-3 flex-shrink-0" />
                <span>Mon - Sun, 7AM - 7PM</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a  className="hover:text-blue-400" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About Us</a></li>
                <li><a  className="hover:text-blue-400" onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}>Contact Us</a></li>
                <li><a  className="hover:text-blue-400" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>Our Courses</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms & Condition</a></li>
                <li><a href="#" className="hover:text-blue-400">Support</a></li>
              </ul>
            </div>
            
            <div>
               <p className="text-gray-500 mb-4">
                Providing quality driving education since 2005. We're committed to creating safe and confident drivers.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Priyanshi Driving School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  
  
  </>
  )
}

export default Footer