import React from 'react'
import { useState } from 'react';
import Starter from '../../assets/image/starters.jpeg'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5"

const Starters = () => {
  return (
    <div className='h-[2500px] bg-menu1'>
      <div className='w-full relative top-32'>
      <div className='container w-full'>
      <img src={Starter} className='h-[500px] w-full px-2 object-cover bg-no-repeat' />
      </div> 
        <div className="flex text-white text-3xl font-semibold mt-4 mx-1  tracking-widest w-full">
        <Link to='/chiense'>
            <p className="py-1 text-3xl">
              <FaArrowLeft />
            </p>
        </Link>
          <p className="px-5">STARTERS</p>
          <p className="px-5">SIDES</p>
          <p className="px-5">SALADS</p>
          <p className="px-5">DESSERTS/ICE-CREAM</p>
          <p className="px-5">MAIN COURSE</p>
          <p className="px-5">VALUE COMBO</p>
          <Link to="/sides">
            <p className="py-1  text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
         <div className='flex w-full mt-14 pl-10'>
           <div className="flex flex-col w-1/2 pl-10  border-yellow-500  border-r-2">
                 <p className='text-3xl font-semibold text-white ml-20'>STARTERS</p>
             <div className="flex mt-16">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            CRISPY VEGETABLE SPRING ROLLS
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            PANEER TIKKA SKEWERS
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            STUFFED MUSHROOMS WITH SPINACH AND FETA
            <p className="text-yellow-300 font-bold">199/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            CORN AND CHEESE BALLS
            <p className="text-yellow-300 font-bold">179/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            CHICKEN SATAY WITH PEANUT SAUCE
            <p className="text-yellow-300 font-bold">259/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            PRAWN TEMPURA
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            SPICY CHICKEN WINGS
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            FISH TIKKA TACOS
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
          
      </div>
        <div className='flex flex-col pl-10'>
        <p className='text-3xl font-semibold text-white ml-20'>MOUTHWATERING COMBOS</p>
        <div className="flex mt-16">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            VEGETARIAN PLATTER
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
        </div>
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            SUNSET SIGNATURE SAMPLER
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
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
