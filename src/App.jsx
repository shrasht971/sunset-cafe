import { useState } from 'react'
import './App.css'
import Landingpage from './component/Landingpage/Landingpage'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Menu from './component/Menu/Menu'
import Menu1 from './component/Menu/Menu1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    <Router>
     {/* <Landingpage /> */}
     <Navbar />
     <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path='menu' element={<Menu />} />
      <Route path='menu1' element={<Menu1 />} />
    </Routes>
    <Footer />
    </Router>
    </div>
  )
}

export default App
