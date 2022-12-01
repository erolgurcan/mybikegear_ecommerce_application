import React from 'react'
import Shop from './Shop'
import ProductDetails from './ProductDetails'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

const ShopRouter = ( {isAuth, setIsAuth} ) => {

    const [detail, setDetail] = useState([])

  return (
    <div>


        <Routes>
            <Route path="/product" element={<ProductDetails detail= {detail} />} />
            <Route path="/all" element={<Shop isAuth = {isAuth}  setIsAuth = {setIsAuth}  setDetail = {setDetail} />} />
        </Routes>
    </div>
  )
}

export default ShopRouter