
import { Outlet, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import './DashboardLayout.css';
import Sidebar from '../Sidebar/Sidebar'


const DashboardLayout = () => {

 
  return (
    <div>
      <SignedIn>
        <Navigate to="/dashboard/main"/>
        <div className="App">
          <div className="AppGlass">
            <div className='f '>
            <Sidebar />
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Navigate to="/" replace={true} />
      </SignedOut>
    </div>
  );
};

export default DashboardLayout;
