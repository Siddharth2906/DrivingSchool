import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DrivingSchoolHomepage from './Header/ONroad.jsx'
import HeadPage from './Homepage/HeadPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainTeam from './Homepage/MainTeam.jsx'
import MainAbout from './Homepage/MainAbout.jsx'
import MainCourses from './Homepage/MainCourses.jsx'
import MainTestimonal from './Homepage/MainTestimonal.jsx'
import MainFeatures from './Homepage/MainFeatures.jsx'
import MainContact from './Homepage/MainCOntact.jsx'
const react = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
          {
            path: '/',
            element: <HeadPage/>,
          },
                  {
            path: '/our-team',
            element: <MainTeam/>,
          },
          
          
          {
            path: '/about',
            element: <MainAbout/>,
          },
          {
            path: '/courses',
            element: <MainCourses/>,
          },
          {
            path: '/testimonal',
            element: <MainTestimonal/>,
          },
          {
            path: '/features',
            element: <MainFeatures/>,
          },
          {
            path: '/contact-us',
            element: <MainContact/>,
          },
          
        ],
  },
  {
    
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={react} />
  </StrictMode>,
)
