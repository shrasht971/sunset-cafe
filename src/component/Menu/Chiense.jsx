import React from 'react'
import { useState } from 'react';
import Chinese1 from '../../assets/image/chinese1.jpeg'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5"

const Chiense = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMoreLess = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='h-[2500px] bg-menu-bgcolor'>
    <div className='w-full relative top-32'>
    <div className='container w-full'>
      <img src={Chinese1} className='h-[500px] w-full px-2 object-cover bg-no-repeat' />
    </div>
    <div className="flex text-white text-3xl font-semibold mt-4 mx-2  tracking-widest w-full">
    <Link to='/bsmenu'>
          <p className="px-10">BURGER & SANDWICHES</p>
    </Link>
          <p className="px-10">CHINESE CUSINE</p>
    <Link to='/starters' className='hover:text-welcome'>     
          <p className="px-10">STARTERS</p>
    </Link> 
          <p className="px-10">SIDES</p>
          <p className="px-10">SALADS</p>
          <Link to="/starters">
            <p className="py-1 text-3xl">
              <FaArrowRight />
            </p>
          </Link>
    </div>
    <div className='flex w-full mt-14 pl-10'>
    <div className="flex lg:flex-col w-1/2 pl-10  border-yellow-500  border-r-2">
       <p className='text-3xl font-semibold text-white'>APPETIZERS</p>
       <div className="flex mt-16">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            SPRING ROLLS TRIO
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
          <p className='text-3xl font-semibold text-white mt-10'>SOUPS</p>
       <div className="flex mt-16 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            HOT AND SOUR SOUP
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
          <div className="flex mt-6 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            WONTON NOODLE SOUP
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
          <p className='text-3xl font-semibold text-white mt-10'>MAIN COURSE</p>
       <div className="flex mt-16 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            SICHUAN CHICKEN WITH BROCCOLI
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
          <div className="flex mt-6 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            CANTONESE VEGETABLE CHOW MEIN
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
    </div> 
    <div className="flex flex-col  ml-10 ">
          <p className='text-3xl font-semibold text-white '>RICE AND NOODLES</p>
       <div className="flex mt-16 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            YANGZHOU FRIED RICE
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
          <div className="flex mt-6 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            DAN DAN NOODLES
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          </div>
          <p className='text-3xl font-semibold text-white mt-10'>SWEET CONCLUSIONS</p>
       <div className="flex mt-16 ">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            MANGO STICKY RICE SPRING ROOLS
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
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
