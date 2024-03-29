import React from 'react'
import { useState } from 'react';
import Starter from '../../assets/image/starters.jpeg'
import Burger1 from '../../assets/image/burger1.png'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5"

const Starters = () => {
  return (
    <div className='h-fit pb-40 bg-menu1'>
      <div className=' relative top-32'>
      <div className='container w-full'>
      <img src={Starter} className='lg:h-[60vh] w-full h-[40vh] px-2 object-cover bg-no-repeat' />
      </div> 
        <div className="flex text-white lg:text-3xl text-xs xs:font-extralight lg:font-semibold mt-4 mx-1  lg:tracking-widest xs:tracking-tighter w-full">
        <Link to='/chiense'>
            <p className="py-1  lg:text-3xl">
              <FaArrowLeft />
            </p>
        </Link>
          <p className="px-1 lg:px-5">STARTERS</p>
          <p className="xs:px-0 sm:px-2 lg:px-5">SIDES</p>
          <p className="xs:px-0 sm:px-2 lg:px-5">SALADS</p>
          <p className="xs:px-0 sm:px-2 lg:px-5">DESSERTS/ICE-CREAM</p>
          <p className="xs:px-0 sm:px-2 lg:px-5  ">MAIN COURSE</p>
          <p className="px-1 lg:px-5 ic">VALUE COMBO</p>
          <Link to="/sides">
            <p className="py-1 lg:text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
         <div className='lg:flex w-full mt-14 lg:pl-10'>
           <div className="flex flex-col lg:w-1/2 lg:pl-10  border-yellow-500  lg:border-r-2">
                 <p className='lg:text-3xl text-2xl font-semibold text-white lg:ml-20 xs:ml-24 sm:ml-36'>STARTERS</p>
             <div className="flex mt-6 lg:mt-16">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            CRISPY VEGETABLE SPRING ROLLS
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg ">
                <p className="text-5xl font-extrabold text-green-500 lg:mt-[-70%] sm:mt-[-100%] xs:mt-[-160%] text-center  ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            PANEER TIKKA SKEWERS
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            STUFFED MUSHROOMS WITH SPINACH AND FETA
            <p className="text-yellow-300 font-bold">199/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500  xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            CORN AND CHEESE BALLS
            <p className="text-yellow-300 font-bold">179/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            CHICKEN SATAY WITH PEANUT SAUCE
            <p className="text-yellow-300 font-bold">259/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            PRAWN TEMPURA
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            SPICY CHICKEN WINGS
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            FISH TIKKA TACOS
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
      </div>
        <div className='flex flex-col lg:pl-10'>
        <p className='lg:text-3xl sm:text-2xl mt-4 text-center font-semibold text-white lg:ml-20'>MOUTHWATERING COMBOS</p>
        <div className="flex mt-6 lg:mt-16">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            VEGETARIAN PLATTER
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        <div className="flex mt-8">
            <div className="text-white lg:text-xl xs:text-xs font-semibold ml-4 w-72 lg:w-96 tracking-widest" >
            SUNSET SIGNATURE SAMPLER
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 xs:mt-[-160%] sm:mt-[-100%] lg:mt-[-70%] text-center">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] xs:mr-4 rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
        </div>
        </div>
         </div>
         <div className="text-center text-white ml-10">
        <button className="text-5xl  "><IoArrowDownCircleOutline /></button>
        </div>
      </div> 
    </div>
  )
}

export default Starters
