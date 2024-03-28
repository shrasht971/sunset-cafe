import React from 'react'
import Valuecombo from '../../assets/image/valuecombo.png'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
const ValueCombo = () => {
  return (
    <div className='h-fit pb-40 bg-menu1'>
    <div className='w-full relative top-32'>
    <div className='container w-full'>
      <img src={Valuecombo} className='lg:h-[70vh] h-[40vh] w-full px-2 object-cover bg-no-repeat' />
    </div>
    <div className="flex text-white xs:text-[2.7vw] xs:fontbold text-xs font-extralight md:text-xl md:font-semibold lg:text-3xl lg:font-semibold mt-4 mx-1 lg:tracking-widest w-full">
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
      <div className="flex mt-6">
          <div className="text-white xs:text-xs md:text-xl  lg:text-xl font-bold ml-4 w-80 md:mr-36 tracking-wider" >
          COMBO 1:SUNSET SAMPLER
          <div className='lg:text-xl pl-4 '>
          <span className='text-4xl font-semibold'>.</span> choice of Starter:
            <p className='lg:text-xs pl-4 lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Crispy Vegetable Spring</p>
            <p className='lg:text-xs pl-4 lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Chicken Satay Skewers</p>
          </div>
          <div className='lg:text-lg pl-4 lg:mt-[-6%]'>
          <span className='text-4xl'>.</span> Main Course:
            <p className='lg:text-xs pl-4 lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Vegetable Pad Thai </p>
            <p className='lg:text-xs pl-4 lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Chicken Tikka Masala</p>
          </div>
          <div className='lg:text-lg pl-4 lg:mt-[-6%]'>
          <span className='text-4xl'>.</span> Side Dish:
            <p className='lg:text-xs pl-4 lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Garlic Parmesan Fries </p>
          </div>
          <div className='lg:text-lg pl-4 lg:mt-[-6%]'>
          <span className='text-4xl'>.</span> Beverage:
            <p className='lg:text-sm pl-4 lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span>  Soft Drink or Iced Tea</p>
            
          </div>
          <p className="text-yellow-300 font-bold mt-2">570/-</p>
          </div>
            <div >
            <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">- 1 +</p>
          </div>
          <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          <div className="mr-4 hid ">
          <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
          <p className=" bg-shadow text-center">- 1 +</p>
          </div>
          </div>
      </div>
      <div className="flex mt-8">
      <div className="text-white xs:text-xs md:text-xl  lg:text-xl font-bold ml-4 w-80 md:mr-36 tracking-wider" >
          COMBO 2:TASTE OF ASIA
          <div className='lg:text-xl xs:mt-[-10%] pl-4 '>
          <span className='text-4xl font-semibold'>.</span> choice of Starter:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Prawn Tempura</p>
            <p className='lg:text-xs pl-4  xs:mt-[-8%] lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Veg Spring Rolls</p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-10%] lg:mt-[-6%]'>
          <span className='text-4xl'>.</span> Main Course:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Beef Rendang with Steamed Jasmine Rice </p>
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Thai Basil Chicken with Egg Fried Rice</p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-10%] lg:mt-[-6%]'>
          <span className='text-4xl'>.</span> Side Dish:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span> Mango Sticky Rice </p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-10%] lg:mt-[-6%]'>
          <span className='text-4xl'>.</span> Beverage:
            <p className='lg:text-sm pl-4 xs:mt-[-8%] lg:mt-[-5%] font-mono'><span className='text-2xl'>.</span>  Thai Iced Tea or Lemongrass Infusion</p>
            
          </div>
          <p className="text-yellow-300 font-bold">799/-</p>
          </div>
            <div >
            <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
          </div>
          <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          <div className="mr-4 hid ">
          <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
          <p className=" bg-shadow text-center">- 1 +</p>
          </div>
          </div>
      </div>
     
      </div> 
      <div className='flex flex-col '>
      <div className="flex mt-6">
      <div className="text-white xs:text-xs md:text-xl  lg:text-xl font-bold ml-4 w-96 md:mr-36 tracking-wider" >
          COMBO 1:VEGETARIAN DELIIGHT
          <div className='lg:text-xl pl-4 '>
          <span className='text-4xl font-semibold'>.</span> Starter:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Caprese salad</p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-10%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Main Course:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Paneer Tikka Masala With Garlic Naan </p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-10%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Side Dish:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Garlic Parmesan Fries </p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-10%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Beverage:
            <p className='lg:text-sm pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono pb-6'><span className='text-2xl'>.</span> Fresh Lime Soda</p>
            
          </div>
          <p className="text-yellow-300 font-bold">799/-</p>
          </div>
    
            <div >
            <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
          </div>
          <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          <div className="mr-4 hid ">
          <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  xs:mr-4 rounded-lg ">
          <p className=" bg-shadow text-center">- 1 +</p>
          </div>
          </div>
      </div>
      <div className="flex mt-12">
      <div className="text-white xs:text-xs md:text-xl  lg:text-xl font-bold ml-4 w-96 md:mr-36 tracking-wider" >
          COMBO 1:SUNSET SAMPLER
          <div className='lg:text-xl pl-4 '>
          <span className='text-4xl font-semibold'>.</span> Starter:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Caprese Salad</p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-8%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Main Course:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Paneer Tikka Masala with Garlic Naan </p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-8%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Side Dish:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Cumin-Spiced Roasted Potatoes </p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-8%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Dessert:
            <p className='lg:text-xs pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono'><span className='text-2xl'>.</span> Lemon Meringue Tart </p>
          </div>
          <div className='lg:text-lg pl-4 xs:mt-[-8%] lg:mt-[-5%]'>
          <span className='text-4xl'>.</span> Beverage:
            <p className='lg:text-sm pl-4 xs:mt-[-8%] lg:mt-[-4%] font-mono pb-6'><span className='text-2xl'>.</span> Fresh Lime Soda </p>
            
          </div>
          <p className="text-yellow-300 font-bold">699/-</p>
          </div>
            <div >
            <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">- 1 +</p>
          </div>
          <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
          <div className="mr-4 hid ">
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

export default ValueCombo
