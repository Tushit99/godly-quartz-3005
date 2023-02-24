import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import PageNotFound from '../Pages/PageNotFound'
import Payment from '../Pages/Payment'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignIn/SignUp'
import Earring from './Earring'
import Newarival from './Newarival'
import PrivateRoute from './PrivateRoute'
import RingProduct from './RingProduct'

const MainRout = () => {
  return (
    <Routes>
        <Route path='/' element={<RingProduct/> } /> 
        <Route path='/newarival' element={<Newarival/>} /> 
        <Route path='/earring' element={<Earring />} />
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path='/payment' element={<PrivateRoute><Payment/></PrivateRoute>} />
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />

    </Routes>
  )
}

export default MainRout 
