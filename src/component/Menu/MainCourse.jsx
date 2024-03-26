import React from 'react'
import Desserts1 from '../../assets/image/desertspic.jpeg'
import Burger1 from '../../assets/image/burger1.png'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const MainCourse = () => {
  return (
    <div className='h-fit pb-40 bg-menu1'>
        <div className='w-full relative top-32'>
        <div className='container w-full'>
          <img src={Desserts1} className='lg:h-[70vh] h-[40vh] w-full px-2 object-cover bg-no-repeat' />
        </div>
        <div className="flex text-white xs:text-[2.7vw] xs:fontbold text-xs font-extralight md:text-xl md:font-semibold lg:text-3xl lg:font-semibold mt-4 mx-1 lg:tracking-widest w-full">
          <Link to='/desserts'>
              <p className="py-1 px-2 sm:text-xs md:text-xl lg:text-3xl">
                <FaArrowLeft />
              </p>
          </Link>
            <Link to='/mainCourse'>
            <p className="px-2 md:px-2 lg:px-14">MAIN COURSE</p>
            </Link>
            <Link to='/valueCombo'>
            <p className="px-2 md:px-3 lg:px-14">VALUE COMBO</p>
            </Link>
            <Link to="/valueCombo">
              <p className="py-1 px-2 sm:text-xs md:text-xl lg:text-3xl">
                <FaArrowRight />
              </p>
            </Link>
          </div>
          <div className='lg:flex w-full lg:mt-14 lg:pl-10'>
          <div className="flex flex-col lg:w-1/2 lg:pl-10  border-yellow-500  lg:border-r-2">
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl  lg:text-xl font-semibold ml-4 w-80 md:mr-36 tracking-widest" >
              VEGETABLE PAD THAI
              <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-green-500 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
              PANNER MAKHANI
              <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-green-500 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center ">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
              VEGETABLE BIRYANI
              <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-green-500 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center ">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
               EGGPLANT PARMESAN
              <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-red-700 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
               CHICKEN TIKKA MASALA
              <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-red-700 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
               GRILLED SALMON WITH LEMON HERB BUTTER
              <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-red-700 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-8">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
               FISH TIKKA TACOS
              <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-red-700 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
         
          </div> 
          <div className='flex flex-col lg:pl-16'>
          <p className='lg:text-3xl xs:text-xs md:text-xl md:font-semibold font-bold text-white text-center lg:ml-20 mt-8'>PASTA AND RISOTTO</p>
          <div className="flex mt-12">
              <div className="text-white md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
               PENNE ARRABBIATA
              <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-green-500 xs:mt-[-180%] sm:mt-[-140%] md:mt-[-100%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          <div className="flex mt-12">
              <div className="text-white xs:text-xs md:text-xl lg:text-xl font-semibold ml-4 w-80  md:mr-36 tracking-widest" >
               MUSHROOM RISOTTO
              <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div className="place-content-center xs:w-10 xs:h-5 sm:w-8 sm:h-6 md:h-8 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg hid">
                  <p className="text-5xl font-extrabold text-green-500 xs:mt-[-180%] md:mt-[-100%] sm:mt-[-140%] lg:mt-[-24px] text-center">
                    .
                  </p>
                </div>
                <div >
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
              <div className="mr-4 hid ">
              <img src={Burger1} className="w-20 h-14 xs:w-18 xs:h-12 mr-4 "/>
              <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
              <p className=" bg-shadow text-center">- 1 +</p>
              </div>
              </div>
          </div>
          </div>
          </div>
          
        </div> 
      </div>
  
  )
}

export default MainCourse
