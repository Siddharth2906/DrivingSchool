import { useState } from 'react'
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import React from 'react'
function Topbar() {
 
  return (
    <>
    {/* Topbar */}
    <div className="bg-gray-900 text-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between">
            <div className="flex">
              <div className="flex items-center mr-4">
                <MapPin size={14} className="text-blue-600 mr-2" />
                <small>123 Street, Sukliya, Indore</small>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="text-blue-600 mr-2" />
                <small>Mon - Sun : 07.00 AM - 07.00 PM</small>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center mr-4">
                <Phone size={14} className="text-blue-600 mr-2" />
                <small>+012 345 6789</small>
              </div>
              <div className="flex">
                <a href="#" className="flex items-center justify-center h-8 w-8 border-r border-gray-700 text-gray-400 hover:text-blue-600">
                  <Facebook size={14} />
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border-r border-gray-700 text-gray-400 hover:text-blue-600">
                  <Twitter size={14} />
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border-r border-gray-700 text-gray-400 hover:text-blue-600">
                  <Linkedin size={14} />
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 text-gray-400 hover:text-blue-600">
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Topbar
