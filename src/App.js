import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductCards from './components/ProductCards'
import Footer from './components/Footer'
import Cartpage from './components/Cartpage'
// import Slider from './components/Slider'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Slider /> */}
        <Routes>

          <Route path='/' element={<ProductCards />} />
          <Route path='/cartpage' element={<Cartpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App