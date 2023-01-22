import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/AdminLogin'
import AdminPage from '../Pages/AdminPage'
import BuyNow from '../Pages/BuyNow'
import CartPage from '../Pages/CartPage'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import ProductPage from '../Pages/ProductPage'
import ProductVitamins from '../Pages/ProductVitamins'
import Product_Info from '../Pages/Product_Info'
import Register from '../Pages/Register'
import SubmissionPage from '../Pages/SubmissionPage'
import ToysProduct from '../Pages/ToysProduct'
import GeneralPrivateRoute from './GeneralPrivateRoute'
import PrivateRoute from './PrivateRoute'
import Updatedata from './Updatedata'

const AllRoutes = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>


        <Route path='product' element={
       
        <ProductPage/>
    
        }></Route>


        <Route path='product_info/:prod_id' element={
        
        <Product_Info/>   //Private
        
        }></Route>


        <Route path='adminpage' element={
        <PrivateRoute>
          <AdminPage/> 
        </PrivateRoute>
        }></Route>


        <Route path='updatedata' element={
        
        <Updatedata/>
        
        }></Route>    
        <Route path="productvitamins" element={<ProductVitamins/>}></Route>
        <Route path='toyproduct' element={<ToysProduct/>}></Route>
        <Route path='cartpage' element={<CartPage/>}></Route>
        <Route path='buynow' element={<BuyNow/>}></Route>
        <Route path='submissionpage' element={<SubmissionPage/>}></Route>
        <Route path='adminlogin' element={
        
     
        <AdminLogin/>
        
        }></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
