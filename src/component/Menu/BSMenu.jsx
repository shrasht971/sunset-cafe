import React from 'react'
import {Link} from 'react-router-dom'
import Menu1 from '../../assets/image/menu1.jpeg'
import { FaArrowRight } from "react-icons/fa";

const BSMenu = () => {
  return (
    <div className="h-[2500px]  bg-menu-bgcolor "> 
    <div className=" w-full relative top-32">
    <div className="container w-full ">
          <img src={Menu1} className="h-[500px] w-full px-2 object-cover bg-no-repeat " />
        </div>
        <div className='flex text-white text-3xl font-semibold mt-4 mx-2  tracking-widest w-full'>
          <p className='px-10 hover:text-welcome' >BURGER & SANDWICHES</p>
          <p className='px-10'>CHINESE CUSINE</p>
          <p className='px-10'>STARTERS</p>
          <p className='px-10'>SIDES</p>
          <p className='px-10'>SALADS</p>
          <Link to="/">
          <p className='py-1 text-3xl'><FaArrowRight /></p>
          </Link>
        </div>
    </div>  
    </div>
  )
}

export default BSMenu
