import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Product from './pages/Product'
import Promote from './pages/Promote'
import Income from './pages/Income'
import Help from './pages/Help'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Promote" element={<Promote />} />
          <Route path="/Income" element={<Income />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
