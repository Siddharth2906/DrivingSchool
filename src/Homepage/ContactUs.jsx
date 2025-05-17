import React, { useState } from 'react';
import { ArrowRight, ArrowDown, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Available services for dropdown
  const services = [
    "Select a course type",
    "Automatic License",
    "Manual License",
    "Refresher Course",
    "Defensive Driving",
    "Highway Confidence"
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0],
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      tempErrors.phone = "WhatsApp number is required";
      isValid = false;
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Service validation
    if (formData.service === services[0]) {
      tempErrors.service = "Please select a course type";
      isValid = false;
    }

    // Message validation (optional field)
    if (formData.message.trim() && formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Prepare WhatsApp message
      const message = encodeURIComponent(
        `Hello, I'm interested in your driving lessons.\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Course: ${formData.service}\n` +
        `Message: ${formData.message}`
      );
      
      // Phone number format for WhatsApp (without +)
      const phoneNumber = +919174187184
      // After timeout to show loading state (can be replaced with actual API call)
      setTimeout(() => {
        setIsSubmitting(false);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }, 500);
    }
  };

  return (
    <section id="contact-us" className="py-16 bg-blue-400">
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-white text-opacity-90 mt-2">
              Sign up today and start your journey to becoming a confident driver!
            </p>
          </div>
          <button
            onClick={toggleForm}
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded inline-flex items-center"
          >
            Contact Us Now{' '}
            {isFormVisible ? (
              <ArrowDown size={16} className="ml-2" />
            ) : (
              <ArrowRight size={16} className="ml-2" />
            )}
          </button>
        </div>

        {/* Form Section */}
        <div 
          className={`container mx-auto px-4 py-6 transition-all duration-500 ease-in-out overflow-hidden ${
            isFormVisible 
              ? 'max-h-[2000px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-3xl mx-auto my-6">
            <div className="bg-blue-600 text-center p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-white">Make Appointment</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-800 rounded p-4 pt-6 peer border-0 focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder=""
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Full Name *
                    </label>
                    {errors.name && <p className="mt-1 text-sm text-red-600 text-left">{errors.name}</p>}
                  </div>

                  {/* Phone Number Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-800 rounded p-4 pt-6 peer border-0 focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder=""
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Your WhatsApp number *
                    </label>
                    {errors.phone && <p className="mt-1 text-sm text-red-600 text-left">{errors.phone}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-800 rounded p-4 pt-6 peer border-0 focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder=""
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Your Email *
                    </label>
                    {errors.email && <p className="mt-1 text-sm text-red-600 text-left">{errors.email}</p>}
                  </div>

                  {/* Courses Type Field */}
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-800 rounded p-4 pt-6 peer border-0 focus:ring-2 focus:ring-blue-400 outline-none"
                    >
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                   
                    {errors.service && <p className="mt-1 text-sm text-red-600 text-left">{errors.service}</p>}
                  </div>

                  {/* Message Field */}
                  <div className="relative col-span-1 sm:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-800 rounded p-4 pt-6 peer border-0 focus:ring-2 focus:ring-blue-400 outline-none"
                      placeholder=""
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Message
                    </label>
                    {errors.message && <p className="mt-1 text-sm text-red-600 text-left">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-1 sm:col-span-2 mt-2">
                    <button
                      type="submit"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;