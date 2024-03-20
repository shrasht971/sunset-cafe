import React,{useState} from "react";
import logo from "../../assets/image/logo.png";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Menu from "../Menu/Menu" 
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: "/" },
    { id: 2, text: 'Menu', link: "/menu" },
    { id: 3, text: 'Contact Us' , link:"/contact" },
    { id: 4, text: 'Blog' , link :"/blog"},

  ];

  return (
    <div className="absolute top-0 z-40 w-full ">
    <div className='flex justify-between items-center h-24 sans lg:text-3xl lg:w-[1536px] mx-auto px-4 text-white bg-transparent'>
      {/* Logo */}
     <div> <img src={logo} className="object-cover h-16 w-38 object-left  py-0 flex-1"/></div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link  to={item.link}
            key={item.id}
            className='p-4 m-5 cursor-pointer'
          >
            {item.text}
          </Link>
        ))}
        <button className="font-sans  p-4 m-2 ">sign in<span className="text-yellow-500 h-18 ">|</span>login</button>
        <button  className="p-0 m-6 font-sans text-sm"><AiOutlineShoppingCart size={40} /> <p >My Cart</p></button>
       
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[80%] h-96 border-r border-r-gray-900 bg-zinc-600 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div><img src={logo}className="w-30 h-12 m-4 " /></div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to="/"
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-neutral-500 duration-300 hover:text-black cursor-pointer border-yellow-200'
          >
            {item.text}
           
          </Link>
          
        ))}
        <button className="font-sans flex p-4 w-full border-b rounded-xl hover:bg-neutral-500 duration-300 hover:text-black cursor-pointer border-yellow-200 ">sign in<span className="text-yellow-500 h-18 ">|</span>login</button>
        <button  className="p-0 w-full border-b rounded-xl hover:bg-neutral-500 duration-300 hover:text-black cursor-pointer border-yellow-200 font-sans text-sm"><AiOutlineShoppingCart size={40} className="ml-5" /> <p className="flex ml-6">My Cart</p></button>
      </ul>
    </div>
    </div>
  )
};


export default Navbar;
