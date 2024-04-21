import  { useState } from 'react';
import { SignInButton } from '@clerk/clerk-react';
import {  Link, NavLink } from 'react-router-dom';
import HeaderSidebar from './HeaderSidebar';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
  
    return (
      <nav className="bg-white shadow-md shadow-slate-400">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex ml-8 px-4 py-4">
              {/* <img src="/images/nav_logo.png" alt="" />
              <img src="/images/nav_text.png" alt="" /> */}
              <img src="/images/logo-no-background.png" alt=""  width="150px" height="100px"/>
            </Link>
            <ul className='flex max-md:hidden max-lg:hidden'>
            <li className='px-4 py-4 mt-1 ml-56'>
                <NavLink to="/" className={({isActive})=>`font font-semibold text-lg ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    Home
                </NavLink>
            </li>
            <li className='px-4 py-4 mt-1'>
                <NavLink to="/about" className={({isActive})=>`font font-semibold text-lg ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    About us
                </NavLink>
            </li>
            <li className='px-4 py-4 mt-1'>
                <NavLink to="/contact" className={({isActive})=>`font font-semibold text-lg ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    Contact
                </NavLink>
            </li>
            <li>
                <div  className=''>
                    <button className='px-4 py-1 mt-4 font font-semibold text-lg text-slate-600 ml-56 rounded-xl border-2 border-slate-400 hover:bg-blue-500 hover:text-white ease-in shadow-md '>
                        <SignInButton mode='modal' redirectUrl='/dashboard'/>
                    </button>
                </div>
            </li>
            </ul>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden ml-4 px-4 py-2">
            <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
          {isSidebarOpen && <HeaderSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />}
        </div>
        <div>

        </div>
      </nav>
    );
  }
  
  export default Header;