import React from 'react'
import {Routes,Route} from "react-router-dom"
import MenShirt from '../Pages/men/MenShirt'
import MenPants from '../Pages/men/MenPants'
import MenShoes from '../Pages/men/MenShoes'
import SingleProduct from "../Pages/SingleProduct"
import Home from '../Pages/Home'
// import Login from '../pages/Login'
import Products from "../Pages/Products"

const AllRoutes = () => {
    return (
        
            <Routes>
          {/* <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />}/> */}
          {/* <Route path="/products" element={ <Products />}/> */} 
          <Route path="/MenShirt" element={ <MenShirt />}/>
          <Route path="/MenPants" element ={<MenPants />} /> 
          <Route path="/MenShoes" element ={<MenShoes />} /> 
          <Route path="/MenShirt/:id" element={<SingleProduct />} />
        <Route path="/MenPants/:id" element={<SingleProduct />} />
        <Route path="/MenShoes/:id" element={<SingleProduct />} />
            </Routes>
        
    )
}

export {AllRoutes}