import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Route/Home'
import Login from '../Route/Login'
import Products from "../Route/Products"

const AllRoutes = () => {
    return (
        <div>
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/products" element={ <Products />}/> 
          <Route path="/products:id" element={<SingleProduct/>} />
         </Routes>
        </div>
    )
}

export {AllRoutes}