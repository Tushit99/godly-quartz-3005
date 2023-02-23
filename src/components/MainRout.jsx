import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import PageNotFound from '../Pages/PageNotFound'
import Payment from '../Pages/Payment' 
import Earring from './Earring/Earring'
import Newarival from './Newarival/Newarival'
import RingProduct from './Ring/RingProduct'

const MainRout = () => {
  return (
    <Routes>
        <Route path='/' element={<RingProduct /> } /> 
        <Route path='/newarival' element={<Newarival />} /> 
        <Route path='/earring' element={<Earring />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path="*" element={<PageNotFound />}></Route>
    </Routes> 
  )
}

export default MainRout 
