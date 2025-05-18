import React from 'react'
import { ChevronUp, MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle } from 'lucide-react';
import img1 from "../img/team-1.jpg"
import img2 from "../img/team-2.jpg"
import img3 from "../img/team-3.jpg"
import img4 from "../img/team-4.jpg"
import { useOutletContext } from 'react-router-dom';
const teamMembers = [
    { id: 1, name: "Vandana Shakay", position: "Trainer", image: img1 },
    { id: 2, name: "Deepali Shakay", position: "Trainer", image: img2 },
  ];
  
const Team = () => {
  const context =useOutletContext();
  return (
  <>  {/* Team */}
  <div className={`container mx-auto px-4 py-12 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} `}>
    <div className="text-center max-w-lg mx-auto mb-8">
      <h6 className="text-blue-600 font-bold uppercase mb-2">Meet The Team</h6>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">We Have Great Experience Of Driving</h1>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-10 rounded-xl p-6 shadow-lg shadow-blue-500/10 border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300">
      {teamMembers.map(member => (
        <div key={member.id} className="relative group">
          <div className="relative">
            <img src={member.image} alt={member.name} className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,255,0.5)] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              
            </div>
          </div>
          <div className={` ${context.darkMode ? 'bg-gray-500 text-white' : 'bg-white text-gray-900'} text-center p-4`}>
            <h5 className="font-bold mt-2">{member.name}</h5>
            <span>{member.position}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</>
  )
}

export default Team