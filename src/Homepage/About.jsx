import React from "react";
import {
  ChevronUp,
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Check,
  MessageCircle,
} from "lucide-react";
import img1 from "../img/about-1.jpg";
import img2 from "../img/courses-1.jpg";
import { useOutletContext } from "react-router-dom";
import SEO from "../seo/SEO";
const About = () => {
  const context = useOutletContext();
  //  console.log(context.darkMode)
  return (
    <>
    <SEO 
    title="About Us | Priyanshi Driving School Indore"
    description="Learn more about Priyanshi Driving School – Indore's trusted ladies-to-ladies driving school offering personalized training for women in car, bike, and scooty learning."
    />
      {/* About */}
      <div
        id="about"
        className={`container mx-auto px-4 py-12 ${
          context.darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } `}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="relative overflow-hidden pt-5 pl-5"
            style={{ minHeight: "400px" }}
          >
            <img
              src={img2}
              alt="About"
              className="absolute w-full h-full object-cover"
            />
            <img
              src={img1}
              alt="About"
              className={`absolute top-0 left-0 ${
                context.darkMode
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"
              } p-3`}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <h6 className="text-blue-600 font-bold uppercase mb-2">About Us</h6>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Helping You Clear the Test with Confidence
            </h1>
            <p>
              At our driving institute, we focus on empowering learners to
              succeed from day one. With well-structured lessons and
              knowledgeable mentors, we ensure you're thoroughly equipped to
              clear the test on your first try.
            </p>
            <p className="mb-4">
              Whether you're starting from scratch or brushing up your skills,
              our flexible sessions adapt to your needs. Experience a
              comfortable, encouraging setup that makes learning smooth and
              stress-free.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <Check size={16} className="text-blue-600 inline mr-2" />
                Fully Licensed
              </div>
              <div>
                <Check size={16} className="text-blue-600 inline mr-2" />
                Expert Guidance
              </div>
              <div>
                <Check size={16} className="text-blue-600 inline mr-2" />
                Afordable Fee
              </div>
              <div>
                <Check size={16} className="text-blue-600 inline mr-2" />
                Best Trainers
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/916266774711?text=Hello%20I%20am%20Interested%20in%20Learning%20Driving,%20Kindly%20give%20Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white text-center py-3 px-5 rounded"
              >
                Whatsapp
              </a>

              <a
                href="tel:+0123456789"
                className="flex items-center border-2 border-blue-600 p-2 rounded"
              >
                <span className="flex-shrink-0 bg-blue-600 p-2 mr-2">
                  <Phone size={11} className="text-white" />
                </span>
                <span>+91 6266774711 </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
