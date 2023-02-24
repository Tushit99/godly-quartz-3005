import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Admin'
import Edit from '../Admin/EditData/Edit'
import Cart from '../Pages/Cart'
import PageNotFound from '../Pages/PageNotFound'

import Payment from '../Pages/Payment'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignIn/SignUp' 
import Blank from './Blank'
import Earring from './Earring/Earring'
import Newarival from './Newarival/Newarival'
import PrivateRoute from './PrivateRoute'
import RingProduct from './Ring/RingProduct'


const MainRout = () => {
  return (
    <Routes>
      <Route path='/' element={<Blank />} />
      <Route path='/ring' element={<RingProduct />} />
      <Route path='/newarival' element={<Newarival />} />
      <Route path='/earring' element={<Earring />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
      <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path='/admin/:name/:id' element={<Edit />} />
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>

  )
}

export default MainRout 
