import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../Pages/AdminPage'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import ProductPage from '../Pages/ProductPage'
import ProductVitamins from '../Pages/ProductVitamins'
import Product_Info from '../Pages/Product_Info'
import Register from '../Pages/Register'
import Updatedata from './Updatedata'

const AllRoutes = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='product' element={<ProductPage/>}></Route>
        <Route path='product_info/:prod_id' element={<Product_Info/>}></Route>
        <Route path='adminpage' element={<AdminPage/>}></Route>
        <Route path='updatedata' element={<Updatedata/>}></Route>
        <Route path="productvitamins" element={<ProductVitamins/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
