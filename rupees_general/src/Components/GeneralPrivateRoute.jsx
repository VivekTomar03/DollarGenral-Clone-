import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthConetxt } from '../Context/AuthContext';
import HomePage from '../Pages/HomePage';

const GeneralPrivateRoute = ({children}) => {
  const{ userlogin} =  useContext(AuthConetxt);

  if(!userlogin){
    return <Navigate to="/login"/>
  }
  return  children
}

export default GeneralPrivateRoute;
