import { useState } from 'react';
import { MessageSquare, Send, User, Phone, Mail, Car } from 'lucide-react';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
export default function WhatsAppFormSubmission() {
 const context  =useOutletContext();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Ladies Driving Training',
    message: ''
  });
  
  // Error and success states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Business WhatsApp number (replace with your actual number)
  const whatsappNumber = "919174187184";
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s()-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Generate WhatsApp message from form data
  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Service:* ${formData.service}\n\n` +
      `*Message:*\n${formData.message || 'No additional message'}`
    );
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Generate WhatsApp URL with form data
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;
      
      // Simulate a brief loading state before redirecting
      setTimeout(() => {
        setSubmitted(true);
        
        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Ladies Driving Training',
          message: ''
        });
        
        setIsSubmitting(false);
      }, 1000);
    }
  };
  
  const services = [
    "Ladies Driving Training",
    "Beginner Driving Lessons",
    "Advanced Driving Skills",
    "Defensive Driving Course",
    "Parking Practice Sessions"
  ];
  
  return (
    <div className={`min-h-screen ${context.darkMode ? 'bg-gray-900 ' : 'bg-white '}  py-12 px-4 sm:px-6 lg:px-8`}>
          <div className="text-center max-w-lg mx-auto mb-10 ">
      <h6 className="text-blue-600 font-bold uppercase mb-2">Contact us</h6>
      <h1 className="text-3xl md:text-3xl font-bold mb-4">We’d love to hear from you. Fill out the form below or reach us on WhatsApp.</h1>
    </div>
      <div className="max-w-md mx-auto  rounded-xl  shadow-lg shadow-blue-500/10 border border-gray-700 hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden md:max-w-2xl">
        <div className="bg-blue-600 p-4 flex items-center">
          <MessageSquare className="text-white mr-2" size={24} />
          <h2 className="text-xl font-bold text-white">Connect with Us on WhatsApp</h2>
        </div>
        
        <div className={`p-6 ${context.darkMode ? 'bg-gray-900 text-white-100' : 'bg-white text-gray-900 '}`}>
          {submitted ? (
            <div className="text-center py-8">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <MessageSquare className="text-green-500" size={32} />
                <User className="text-green-500 ml-2" size={24} />
              </div>
              <h3 className="text-xl font-medium text-green-600 mb-2">Redirecting to WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Your form details have been prepared for WhatsApp. If a new tab didn't open, click the button below.
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow flex items-center justify-center mx-auto"
              >
                <MessageSquare className="mr-2" size={18} />
                Open WhatsApp
              </button>
            </div>
          ) : (
            <>

              <p className="text-gray-600 mb-6">
                Fill in your details below and we'll continue the conversation on WhatsApp
              </p>
              
              <div  className={`space-y-4 ${context.darkMode ? 'bg-gray-900 text-white-100' : 'bg-white text-gray-900 '}`}>
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-gray-400" size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="text-gray-400" size={18} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Your WhatsApp number"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
                
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address (optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-400" size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Your email (optional)"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                {/* Service selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Car className="text-gray-400" size={18} />
                    </div>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`block ${context.darkMode ? 'bg-gray-900 text-white-100' : 'bg-white text-gray-900 '} w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us a bit more about what you're looking for..."
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                      isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="mr-2" size={18} />
                        Continue on WhatsApp
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive communication via WhatsApp.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}