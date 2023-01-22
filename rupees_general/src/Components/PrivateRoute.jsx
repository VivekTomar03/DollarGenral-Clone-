
import React, { Children, useContext } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { AuthConetxt } from '../Context/AuthContext';
import AdminLogin from '../Pages/AdminLogin';
import AdminPage from '../Pages/AdminPage';

const PrivateRoute = ({children}) => {
const{ adminAuth } = useContext(AuthConetxt)   
 if(!adminAuth){
    return <Navigate to='/adminlogin' />
 }
 
    return children
 
 
}

export default PrivateRoute;
