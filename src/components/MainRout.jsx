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
import RingProduct from './Ring/RingProduct'
import PrivateRoute from './PrivateRoute'
import Earring from './Earring/Earring'
import NewArival from './NewArival/NewArival'  


const MainRout = () => {
  return (
    <Routes>
      <Route path='/' element={<Blank />} />
      <Route path='/ring' element={<RingProduct />} />
      <Route path='/earring' element={<Earring />} />
      <Route path='/newarival' element={<NewArival />} />
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
