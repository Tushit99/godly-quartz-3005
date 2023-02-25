import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Admin'
import Edit from '../Admin/EditData/Edit'
import Cart from '../Pages/Cart'
import PageNotFound from '../Pages/PageNotFound'
import Payment from '../Pages/Payment'
import SignIn from '../Pages/SignIn/SignIn' 
import SignUp from '../Pages/SignIn/SignUp'
import RingProduct from './Ring/RingProduct'
import PrivateRoute from './PrivateRoute'
import Earring from './Earring/Earring' 
import NewArival from './Newarival/Newarival'
import Single from './SingleProduct/Single'
import Home from '../Pages/Home'
import Success from '../Pages/Success'
import Address from '../Pages/Address'


const MainRout = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ring' element={<RingProduct />} /> 
      <Route path='/newarival' element={<NewArival />} />
      <Route path='/earring' element={<Earring />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path='/success' element={<PrivateRoute><Success /></PrivateRoute>} />
      <Route path='/address' element={<PrivateRoute><Address /></PrivateRoute>} />
      <Route path='/admin/:name/:id' element={<Edit />} />
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> 


      <Route path='/ring/:name/:id' element={<Single />} /> 
      <Route path='/newarival/:name/:id' element={<Single />} />
      <Route path='/earring/:name/:id' element={<Single />} />

    </Routes> 
  )
}

export default MainRout 
