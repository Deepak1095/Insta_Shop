import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from "../Pages/Products"

const AllRoutes = () => {
    return (
        <div>
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/products" element={ <Products />}/>  </Routes>
        </div>
    )
}

export {AllRoutes}