import React from 'react'
import Sides1 from '../../assets/image/sides1.jpeg'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5"

const Sides = () => {
  return (
    <div className='h-[1600px] bg-menu1'>
      <div className='w-full relative top-32'>
      <div className='container w-full'>
        <img src={Sides1} className='h-[500px] w-full px-2 object-cover bg-no-repeat' />
      </div>
      <div className="flex text-white text-3xl font-semibold mt-4 mx-1  tracking-widest w-full">
        <Link to='/starters'>
            <p className="py-1 text-3xl">
              <FaArrowLeft />
            </p>
        </Link>
          <p className="px-10">SIDES</p>
          <p className="px-10">SALADS</p>
          <p className="px-10">DESSERTS/ICE-CREAM</p>
          <p className="px-10">MAIN COURSE</p>
          <p className="px-10">VALUE COMBO</p>
          <Link to="/salads">
            <p className="py-1  text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
        <p className='text-center text-3xl text-white font-bold mt-6 uppercase'>Café Sunset Sides Selection</p>
        <div className='flex w-full mt-14 pl-10'>
        <div className="flex flex-col w-1/2 pl-10  border-yellow-500  border-r-2">
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            Garlic Parmesan Fries
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
            GRILLED SEASONAL VEGETABLES
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
             CUMIN-SPICED ROASTED POTATOES
            <p className="text-yellow-300 font-bold">139/-</p>
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
             SESAME GINGER GLAZED GREEN BEANS
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
            HONEY SRIRACHA CHICKEN WINGS
            <p className="text-yellow-300 font-bold">129/-</p>
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
            CRISPY CALAMARI RINGS
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
            CHILI GARLIC GRILLED CHICKEN SKEWERS
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
        <div className="flex mt-8">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
            FISH TIKKA TACOS
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
        </div> 
        <div className='flex flex-col pl-16'>
        <p className='text-3xl font-bold text-white ml-20 mt-8'>INDULGENT ADD-ONS</p>
        <div className="flex mt-12">
            <div className="text-white text-xl font-semibold ml-4 w-60 mr-36 tracking-widest" >
             TRUFFLE PARMESAN FRIES
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
        <div className="flex mt-12">
            <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest" >
             LOADED POTATO SKINS
            <p className="text-yellow-300 font-bold">139/-</p>
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
        
      </div> 
    </div>
  )
}

export default Sides
