import { useState, useEffect } from 'react';
import { Car, User, Shield, Award, MapPin } from 'lucide-react';
import React from 'react'
import { useOutletContext } from 'react-router-dom';
export default function DrivingTrainingAnimation() {
  const [animationStage, setAnimationStage] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [showSpecialBanner, setShowSpecialBanner] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  const drivingSkills = [
    { icon: <Shield className="text-blue-500" size={24} />, text: "Safety First" },
    { icon: <MapPin className="text-red-500" size={24} />, text: "Navigation" },
    { icon: <Award className="text-yellow-500" size={24} />, text: "Confidence" }
  ];

  useEffect(() => {
    // Control animation sequence
    const timeline = [
      () => setShowSpecialBanner(true),
      () => setAnimationStage(1),
      () => setAnimationStage(2)
    ];
    
    // Execute animation sequence
    timeline.forEach((action, index) => {
      setTimeout(action, 800 * (index + 1));
    });
    
    // Start car animation
    const carInterval = setInterval(() => {
      setCarPosition(prev => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);
    
    // Cycle through skills
    const skillInterval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % drivingSkills.length);
    }, 3000);
    
    return () => {
      clearInterval(carInterval);
      clearInterval(skillInterval);
    };
  }, []);

  // Road line animation frames
  const roadLines = Array(5).fill(0).map((_, i) => (
    <div 
      key={i} 
      className="absolute h-6 w-12 bg-white" 
      style={{ 
        left: `${(i * 20 + carPosition % 20)}%`,
        bottom: '45%',
        opacity: 0.8
      }}
    ></div>
  ));
const context =useOutletContext();
  return (
    <div className={`flex flex-col justify-center items-center  to-white   ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} >
      
      {/* Content section */}
      <div className="w-full max-w-7xl">
        {/* Special banner with animation */}
        <div 
          className={`bg-blue-600 text-white p-3 rounded-t-lg text-center transform transition-all duration-700 ${
            showSpecialBanner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-2xl font-bold animate-pulse">!! Special Services !!</h2>
        </div>
        
        {/* Main content with staged animations */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-b-lg shadow-lg">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <User className="text-pink-500 mr-2" size={24} />
              <span className="text-2xl font-bold text-blue-700">Ladies-Only Training</span>
              <User className="text-pink-500 ml-2" size={24} />
            </div>
            
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            
            <p className={`mt-4 text-gray-600 font-bold max-w-2xl mx-auto transition-all duration-700 ${
              animationStage >= 1 ? 'opacity-100' : 'opacity-0'
            }`}>
              We're proud to Services exclusive ladies-only training sessions with female trainers in our dedicated facility.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 ${
            animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center">
              <Car className="text-blue-500 mr-2" size={24} />
              Female-to-Female Driving Training Available
            </h3>
            
            <p className="text-gray-700 mb-6">
              We understand the importance of comfort and confidence when learning to drive. 
              That's why we offer female-to-female driving training, where women learners are 
              trained by experienced and professional female instructors. This supportive and 
              secure environment helps many women feel more relaxed and empowered behind the wheel. 
              Whether you are a beginner or looking to improve your driving skills, our female 
              instructors are here to guide you every step of the way.
            </p>
            
            {/* Driving skills showcase */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {drivingSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`bg-white p-4 rounded-lg shadow flex flex-col items-center transition-all duration-500 ${
                    activeSkill === index ? 'transform scale-105 border-2 border-blue-400' : ''
                  }`}
                >
                  {skill.icon}
                  <span className="mt-2 text-black font-medium">{skill.text}</span>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}