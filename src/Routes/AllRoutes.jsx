import React from 'react'
import {Routes,Route} from "react-router-dom"
import MenShirt from '../Pages/men/MenShirt'
import MenPants from '../Pages/men/MenPants'
import MenShoes from '../Pages/men/MenShoes'
import SingleProduct from "../Pages/SingleProduct"
import Home from '../Pages/Home'
// import Login from '../pages/Login'
import Products from "../Pages/Products"
import Admin from '../Pages/admin'
import Account from '../Pages/MyAccount'
import Cart from '../Pages/Cart'
import WomenDress from '../Pages/women/WomenDress'
import WomenShoes from '../Pages/women/WomenShoes'
import PrivateRoutes from './PrivateRoute'
const AllRoutes = () => {
    return (
        
            <Routes>
           <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />}/> */}
          {/* <Route path="/products" element={ <Products />}/> */} 
          <Route path="/MenShirt" element={ <MenShirt />}/>
          <Route path="/MenPants" element ={<MenPants />} /> 
          <Route path="/MenShoes" element ={<MenShoes />} /> 
          <Route path="/WomenDress" element={ <WomenDress />}/>
          <Route path="/WomenShoes" element ={<WomenShoes />} /> 
          <Route path="/cart" element ={
          <Cart />
         } /> 
          <Route path="/admin" element ={
          <PrivateRoutes><Admin /></PrivateRoutes>
          } /> 
          <Route path="/account" element ={<Account />} />  
          <Route path="/MenShirt/:id" element={<SingleProduct />} />
        <Route path="/MenPants/:id" element={<SingleProduct />} />
        <Route path="/MenShoes/:id" element={<SingleProduct />} />
        <Route path="/WomenDress/:id" element={<SingleProduct />} />
        <Route path="/WomenShoes/:id" element={<SingleProduct />} />
            </Routes>
        
    )
}

export {AllRoutes}