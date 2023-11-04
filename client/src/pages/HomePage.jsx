import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box} from '@mui/material';
import "../../src/Dash.css";
import  Navbar  from '../components/Navbar';
import DashBoard from '../components/DashBoard';
import authServices from '../services/authServices';
import LogoutHomepage from '../components/LogoutHomepage';
export const HomePage = () => {
  const location = useLocation();
  const isUserLoggedIn = authServices.isUserLoggedIn();
  return (
    <Box>
      <Navbar />
      {isUserLoggedIn? 
      <div>
        {location.pathname === '/'? <DashBoard/>: <Outlet />}
      </div>
      : 
        <LogoutHomepage/>
      }
      
    </Box>
  );
};
