import React from 'react'
import { useState } from 'react';
import Chinese1 from '../../assets/image/chinese1.jpeg'
import { Link } from "react-router-dom"
import Burger1 from '../../assets/image/burger1.png'
import { FaArrowRight } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5"

const Chiense = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMoreLess = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='h-fit pb-32 bg-menu-bgcolor'>
    <div className='w-full relative top-32'>
    <div className='container w-full'>
      <img src={Chinese1} className='lg:h-96 h-60 w-full px-2 object-cover bg-no-repeat' />
    </div>
    <div className="flex text-white lg:text-3xl text-xs lg:font-semibold mt-4 mx-2  lg:tracking-widest w-full">
    <Link to='/bsmenu'>
          <p className="lg:px-10 px-1">BURGER & SANDWICHES</p>
    </Link>
          <p className="lg:px-10 px-1">CHINESE CUSINE</p>
    <Link to='/starters' className='hover:text-welcome'>     
          <p className="lg:px-10 px-1">STARTERS</p>
    </Link> 
          <p className="lg:px-10 px-1">SIDES</p>
          <p className="lg:px-10 px-1">SALADS</p>
          <Link to="/starters">
            <p className="py-1 px-1 lg:text-3xl">
              <FaArrowRight />
            </p>
          </Link>
    </div>
    <div className='lg:flex w-full lg:mt-14 mt-8 pl-10'>
    <div className="flex flex-col lg:w-1/2  lg:pl-10  border-yellow-500  lg:border-r-2">
       <p className='lg:text-3xl text-xl font-semibold text-white'>APPETIZERS</p>
       <div className="flex lg:mt-16">
            <div className="text-white lg:text-xl mt-2 font-semibold ml-4 lg:w-96 w-44  tracking-widest" >
            SPRING ROLLS TRIO
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
              <div >
              <p className="bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="ml-24 hid">
            <img src={Burger1} className="w-20 h-14"/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
          <p className='lg:text-3xl text-xl font-semibold text-white mt-10'>SOUPS</p>
       <div className="flex lg:mt-16 mt-4 ">
            <div className="text-white lg:text-xl font-semibold ml-4 w-96 tracking-widest" >
            HOT AND SOUR SOUP
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-24 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
          <div className="flex mt-6 ">
            <div className="text-white lg:text-xl font-semibold ml-4 w-96 tracking-widest" >
            WONTON NOODLE SOUP
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-24 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
          <p className='lg:text-3xl text-xl font-semibold text-white mt-10'>MAIN COURSE</p>
       <div className="flex mt-6 lg:mt-16 ">
            <div className="text-white lg:text-xl  font-semibold ml-4 w-96 tracking-widest" >
            SICHUAN CHICKEN WITH BROCCOLI
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div> 
          </div>
          <div className="flex mt-6 ">
            <div className="text-white lg:text-xl font-semibold ml-4 w-96 tracking-widest" >
            CANTONESE VEGETABLE CHOW MEIN
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
    </div> 
    <div className="flex flex-col mt-6 lg:ml-10 ">
          <p className='lg:text-3xl text-2xl font-semibold text-white '>RICE AND NOODLES</p>
       <div className="flex lg:mt-16 mt-6 ">
            <div className="text-white lg:text-xl font-semibold ml-4 w-96 tracking-widest" >
            YANGZHOU FRIED RICE
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
          <div className="flex mt-6 ">
            <div className="text-white lg:text-xl font-semibold ml-4 w-96 tracking-widest" >
            DAN DAN NOODLES
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
          <p className='lg:text-3xl text-2xl font-semibold text-white mt-10'>SWEET CONCLUSIONS</p>
       <div className="flex mt-6 lg:mt-16 ">
            <div className="text-white lg:text-xl font-semibold ml-4 w-96 tracking-widest " >
            MANGO STICKY RICE SPRING ROOLS
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic"><p className="text-2xl text-white font-bold ic">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
          </div>
          
    </div> 
    </div>  
    <div className="text-center text-white ml-10">
        <button className="text-5xl  " onClick={toggleReadMoreLess}><IoArrowDownCircleOutline /></button>
        </div>
    </div>  
    </div>
  )
}

export default Chiense
