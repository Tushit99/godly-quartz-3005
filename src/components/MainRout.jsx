import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Earring from './Earring'
import Newarival from './Newarival'
import RingProduct from './RingProduct'

const MainRout = () => {
  return (
    <Routes>
        <Route path='/' element={<RingProduct /> } /> 
        <Route path='/newarival' element={<Newarival />} /> 
        <Route path='/earring' element={<Earring />} />
    </Routes>
  )
}

export default MainRout 
