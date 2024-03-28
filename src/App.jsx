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
import Sides from './component/Menu/Sides'
import Salads from './component/Menu/Salads'
import Desserts from './component/Menu/Desserts'
import MainCourse from './component/Menu/MainCourse'
import ValueCombo from './component/Menu/ValueCombo'
import Blog from './component/Blog/Blog'
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
      <Route path='sides' element={<Sides />} />
      <Route path='salads' element={<Salads />} />
      <Route path='desserts' element={<Desserts />} />
      <Route path='mainCourse' element={<MainCourse />}/>
      <Route path='valueCombo' element={<ValueCombo />}/>
      <Route path='Blog' element={<Blog />}/>
    </Routes>
    
    {isDesktopOrLaptop && <Footer />}
        {isTabletOrMobileDevice && <div><ResFooter/></div>}
    </Router>
    </div>
  )
}

export default App
