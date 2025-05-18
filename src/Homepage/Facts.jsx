import React from 'react'
import { useOutletContext } from 'react-router-dom';


const facts = [
  {
    id: 1,
    icon: "car",
    title: "Easy Driving Learn",
    description: "Start confidently with beginner-friendly, structured lessons."
  },
  {
    id: 2,
    icon: "users",
    title: "Personal Instructor",
    description: "Learn safe and responsible driving from skilled instructors."
  },
  {
    id: 3,
    icon: "file-alt",
    title: "Female-Friendly Learning",
    description: "Learn with comfort – female instructors available on request."
  }
];
const Facts = () => {
  const context =useOutletContext()
  return (
  <>
    {/* Facts */}
    <div className={`container  mx-auto px-4 -mt-12 relative z-10 `}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {facts.map(fact => (
            <div key={fact.id} className={`shadow-lg p-4 ${context.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} style={{ minHeight: '150px' }}>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-600 text-white p-4 mr-4">
                  {fact.icon === 'car' && <i className="fas fa-car"></i>}
                  {fact.icon === 'users' && <i className="fas fa-users"></i>}
                  {fact.icon === 'file-alt' && <i className="fas fa-file-alt"></i>}
                </div>
                <div>
                  <h5 className="font-bold mb-1">{fact.title}</h5>
                  <span>{fact.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  </>
  )
}

export default Facts