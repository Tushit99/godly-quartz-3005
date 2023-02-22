import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RingProduct from './RingProduct'

const MainRout = () => {
  return (
    <Routes>
        <Route path='/' element={<RingProduct /> } />
    </Routes>
  )
}

export default MainRout 
