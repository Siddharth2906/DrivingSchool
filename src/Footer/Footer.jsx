import React, { useEffect, useState } from 'react'
import { ChevronUp, MapPin,ArrowDown, Clock, Phone, Facebook, Twitter, Linkedin, Instagram, Check, MessageCircle ,ArrowRight} from 'lucide-react';
import logo from "../img/Logo1.png"
import { Link, useOutletContext } from 'react-router-dom';
import "./popup.css"

const Footer = ({darkMode}) => {
    const [email, setEmail] = useState("");
    const handleSubscribe = () => {
        alert("Thank you for subscribing!");
        setEmail("");
      };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };
  useEffect(() => {
    if (isOpen || isOpen1) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY= 'scroll';
    }
  }, [isOpen,isOpen1]);
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
                <li><a className="hover:text-blue-400" onClick={togglePopup} >Terms & Condition</a></li>
                <li><a  className="hover:text-blue-400" onClick={togglePopup1}>Support</a></li>
              </ul>
            </div>
            
            <div>
               <p className="text-gray-500 mb-4">
                Providing quality driving education since 2005. We're committed to creating safe and confident drivers.
              </p>
            </div>
          </div>
            {isOpen && (
        <div className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="popup-content bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="popup-title text-2xl font-bold text-gray-800">Terms and Conditions</h2>
              <button 
                className="close-button text-gray-500 hover:text-gray-700 text-6xl font-bold leading-none"
                onClick={togglePopup}
              >
                &times;
              </button>
            </div>
            
            <div className="popup-message p-6 text-gray-700 leading-relaxed">
              <div className="mb-4">
                <p className="font-semibold text-lg mb-2">Effective Date: [Insert Date]</p>
                <p className="mb-4">
                  Welcome to Priyanshi Driving School. By accessing or using our website{' '}
                  <a href="https://priyanshidrivingschool.netlify.app" className="text-blue-600 hover:underline">
                    https://priyanshidrivingschool.netlify.app
                  </a>, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
                </p>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Services Offered</h3>
                  <p>We provide driving education, including theoretical and practical driving lessons. Enrolling in any course is subject to availability and compliance with our eligibility criteria.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Eligibility</h3>
                  <p className="mb-2">To register for our services, you must:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Be at least 18 years of age.</li>
                    <li>Hold a valid learner's or driver's license (as required for the specific service).</li>
                    <li>Be medically and mentally fit to operate a motor vehicle.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">3. User Conduct</h3>
                  <p className="mb-2">By using our website, you agree:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Not to misuse the website or services.</li>
                    <li>Not to engage in any unlawful or fraudulent activity.</li>
                    <li>Not to copy, modify, or distribute website content without permission.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Booking & Cancellation</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bookings must be made in advance through the website or our contact number.</li>
                    <li>Cancellations or rescheduling must be communicated at least 24 hours prior to the lesson.</li>
                    <li>No-shows or late cancellations may result in forfeiture of fees.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">5. Payments and Refunds</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>All payments must be made in full before services are rendered.</li>
                    <li>Refunds are subject to review and are not guaranteed once the service has started.</li>
                    <li>In case of instructor absence, rescheduling will be done without extra charge.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">6. Website Availability</h3>
                  <p>We strive to ensure continuous access to the website. However, we do not guarantee uninterrupted or error-free operation and may suspend access for maintenance or upgrades.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">7. Limitation of Liability</h3>
                  <p className="mb-2">Priyanshi Driving School is not liable for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Any loss, damage, or injury during practical sessions due to negligence by the student.</li>
                    <li>Indirect or consequential losses arising from website use or service delay.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">8. Privacy Policy</h3>
                  <p>Your personal information is collected only for service delivery and will not be shared with third parties without consent. For more details, see our Privacy Policy.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">9. Changes to Terms</h3>
                  <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page and effective immediately upon publication.</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">10. Contact Information</h3>
                  <p className="mb-2">For any questions or concerns regarding these Terms, please contact us at:</p>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="break-all"><span className="font-semibold ">📧 Email:</span> priyanshidrivingschoolindore20@gmail.com</p>
                    <p><span className="font-semibold">📞 Phone:</span> +91 6266774711, +91 9893682072</p>
                    <p><span className="font-semibold">📍 Address:</span> 53, Sethi Sambandh Nagar MR 9 Road near by Sai Sampada, Indore</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {isOpen1 && (
        <div className="popup-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="popup-content bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="popup-title text-2xl font-bold text-gray-800">Support</h2>
              <button 
                className="close-button text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
                onClick={togglePopup1}
              >
                &times;
              </button>
            </div>
            
            <div className="popup-message p-6 text-gray-700 leading-relaxed">
              <div className="mb-6">
                <p className="text-lg">
                  At <strong>Priyanshi Driving School</strong>, we are committed to providing prompt and helpful support to all our learners. Whether you have questions about our courses, bookings, or technical issues with the website — we're here to help!
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    📌 How We Can Help:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-start space-x-2">
                        <span className="text-xl">📅</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Booking Assistance</h4>
                          <p className="text-sm text-gray-600">Help with scheduling, rescheduling, or canceling sessions.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-start space-x-2">
                        <span className="text-xl">📖</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Course Information</h4>
                          <p className="text-sm text-gray-600">Clarification on theory or practical driving lessons.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-start space-x-2">
                        <span className="text-xl">💳</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Payments & Refunds</h4>
                          <p className="text-sm text-gray-600">Support for payment issues or refund requests.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-start space-x-2">
                        <span className="text-xl">🌐</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Website Help</h4>
                          <p className="text-sm text-gray-600">Troubleshooting login or form issues.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 md:col-span-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-xl">🚗</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">Instructor Queries</h4>
                          <p className="text-sm text-gray-600">Requesting a specific instructor or feedback resolution.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    📞 Contact Us:
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📞</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800">Phone:</p>
                        <p className="text-blue-600 break-words text-sm sm:text-base">+91 6266774711, +91 9893682072</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📧</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800">Email:</p>
                        <p className="text-blue-600 break-all text-sm sm:text-base">priyanshidrivingschoolindore20@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🕐</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800">Hours:</p>
                        <p className="text-gray-600 text-sm sm:text-base">Monday to Saturday, 7:00 AM – 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    📍 In-Person Support:
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <p className="text-gray-700 mb-3">
                      Visit our office during working hours for personal assistance:
                    </p>
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🏢</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800">Address:</p>
                        <p className="text-gray-600 break-words text-sm sm:text-base">53, Sethi Sambandh Nagar MR 9 Road near by Sai Sampada, Indore</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Priyanshi Driving School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  
  
  </>
  )
}

export default Footer