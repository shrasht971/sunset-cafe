import { useState } from 'react'
import './App.css'
import Landingpage from './component/Landingpage/Landingpage'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import ResFooter from './component/Footer/ResFooter'
import Menu from './component/Menu/Menu'
import Menu1 from './component/Menu/Menu1'
import BSMenu from './component/Menu/BSMenu'
import Chiense from './component/Menu/Chiense'
import Starters from './component/Menu/Starters'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";

function App() {
  const [count, setCount] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 769px)" });
  const isTabletOrMobileDevice = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div>
    <Router>
     {/* <Landingpage /> */}
     <Navbar />

     
     <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path='menu' element={<Menu />} />
      <Route path='menu1' element={<Menu1 />} />
      <Route path='bsmenu' element={<BSMenu />}  />
      <Route path='chiense' element={<Chiense />} />
      <Route path='starters' element={<Starters />} />
    </Routes>
    
    {isDesktopOrLaptop && <Footer />}
        {isTabletOrMobileDevice && <div><ResFooter/></div>}
    </Router>
    </div>
  )
}

export default App
