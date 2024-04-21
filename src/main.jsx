import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import { ClerkProvider } from '@clerk/clerk-react'
import DashboardLayout from './components/DashBoard/Dashboard-Layout/DashboardLayout'
import MainDash from "./components/DashBoard/MainDash/Maindash"
import { Cube } from 'react-preloaders'
import Profile from './components/DashBoard/UserProfile/Profile'
import Quiz from './components/DashBoard/Quiz/Quiz'
import QuizLayout from './components/DashBoard/Quiz/QuizLayout'
import Portfolio from './components/Portfolio/Portfolio'
import Trade from './components/Trade/Trade'
import HeatMap from './components/Heat Maps/HeatMap'
import Markets from './components/DashBoard/Markets/Markets'
import TradeLayout from './components/Trade/TradeLayout'




const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router =  createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },

      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  },
  {
    path:"/dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        path:"main",
        element:<MainDash/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"trade",
        element:<TradeLayout/>
      },
      {
        path:"heatmap",
        element:<HeatMap/>
      },
      {
        path:"markets",
        element:<Markets/>
      },

]},
{
  path:"/quiz",
  element:<QuizLayout/>,
  children:[
    {
      path:"",
      element:<Quiz/>
    }
  ]
},

{
    path:"/portfolio",
    element:<Portfolio/>,
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Cube color={'#FFF7FC'} background={'#9593f2'}/>
      <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>
)
