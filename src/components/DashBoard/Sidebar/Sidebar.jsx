import Logo from '../Images/nav_logo.png';
import LogoText from '../Images/nav_text.png';
import paperprofits from './logo-no-background.png'

import { SidebarData } from '../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import './Sidebar.css';
import { SignOutButton } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="Sidebar sticky top-0 flex-col  pt-16 transition ease-in-out delay-300">
      <div className="logo flex justify-center">
        {/* <img className="" src={Logo} alt="" />
        <img className="" src={LogoText} alt="" /> */}
        <img src={paperprofits} alt="" width="150px" height="100px" />
      </div>

      <div className="menu flex-col mt-16 gap-8">
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={`/dashboard/${item.navigation}`}
            className={({isActive})=>`menuItem flex ml-4 items-center rounded-lg mt-8 gap-2 text-sm transition ease-linear duration-300 hover:cursor-pointer hover:text-white hover:bg-[#7b79e0] p-3 ${isActive ?"active":""} shadow-[#836FFF] shadow-md hover:shadow-white after:shadow-white`}
            >
            <span>
              <item.icon className=" float-left" />
            </span>
            <span>{item.heading}</span>
          </NavLink>
        ))}
      </div>
     
      <div className="py-2 px-4 rounded-xl bg-[#7875fa] hover:bg-white hover:outline-2 hover:outline-double hover:text-[#7875fa] focus:text-[#7875fa] focus:bg-gray-200 focus:border-2 border-black text-gray-50 font-bold leading-loose transition duration-200 flex items-center mt-32 gap-3 m-6">
        <UilSignOutAlt size="30" />
        <SignOutButton />
      </div>
   
    </div>
  );
};

export default Sidebar;
