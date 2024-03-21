import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu1 from "../../assets/image/menu1.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5"

const BSMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMoreLess = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-[2500px]  bg-menu-bgcolor ">
      <div className=" w-full relative top-32">
        <div className="container w-full ">
          <img
            src={Menu1}
            className="h-[500px] w-full px-2 object-cover bg-no-repeat "
          />
        </div>
        <div className="flex text-white text-3xl font-semibold mt-4 mx-2  tracking-widest w-full">
          <p className="px-10 hover:text-welcome">BURGER & SANDWICHES</p>
          <Link to='/chiense'>
          <p className="px-10">CHINESE CUSINE</p>
          </Link>
          <Link to='/starters'>
          <p className="px-10">STARTERS</p>
          </Link>
          <p className="px-10">SIDES</p>
          <p className="px-10">SALADS</p>
          <Link to="/chiense">
            <p className="py-1 text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
        <div className="flex w-full mt-10 pl-10">
          <div className="flex flex-col w-1/2 ">
            <div className="flex bg-welcome rounded-2xl ml-20 pl-6  mr-96 py-2 ">
              <div className="text-3xl font-semibold text-white mr-4 tracking-wider">
                BURGERS
              </div>
              <div className="place-content-center w-8 h-8 bg-slate-300 border-green-500 border-2  mt-1  rounded-lg">
                <p className="text-4xl font-extrabold text-green-500 mt-[-16px] ml-2   ">
                  .
                </p>
              </div>

              <p className="text-5xl font-extralight  mt-[-8px] text-slate-200">
                /
              </p>

              <div className="place-content-center w-8 h-8 bg-slate-300 border-red-700 border-2  mt-1  mr-4 rounded-lg">
                <p className="text-4xl font-extrabold text-red-700  mt-[-16px] ml-2   ">
                  .
                </p>
              </div>
            </div>
            <div className="flex mt-16 border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest" >
            Tandoori Chicken Tikka Burger
            <p className="text-yellow-300 font-bold">210/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-1">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex  border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-6 " >
            Paneer Bhurji Burger
            <p className="text-yellow-300 font-bold">169/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg mt-6"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 mt-6 w-80 tracking-widest" >
            Aloo Tikki Burger
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-6  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-72 mr-8 tracking-widest mt-8" >
            Egg Bhurji Breakfast Burger
            <p className="text-yellow-300 font-bold">129/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-5  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex  border-yellow-500  border-r-2 ">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-8" >
             Keema Pav Burger
            <p className="text-yellow-300 font-bold">229/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-5  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex  border-yellow-500  border-r-2 ">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-8" >
            Palak Paneer Burger
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg mt-6"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
           {isOpen && (
            <div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 mt-6 w-80 tracking-widest" >
            Aloo Tikki Burger
            <p className="text-yellow-300 font-bold">149/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-6  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-72 mr-8 tracking-widest mt-8" >
            Egg Bhurji Breakfast Burger
            <p className="text-yellow-300 font-bold">129/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-5  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            </div>
            )}
          </div>
          <div className="flex flex-col w-1/2 ">
            <div className="flex bg-welcome rounded-2xl ml-20 pl-6  mr-80 py-2 ">
              <div className="text-3xl font-semibold text-white mr-2 tracking-wider">
                SANDWICHES
              </div>
              <div className="place-content-center w-8 h-8 bg-slate-300 border-green-500 border-2  mt-1  rounded-lg">
                <p className="text-4xl font-extrabold text-green-500 mt-[-16px] ml-2   ">
                  .
                </p>
              </div>

              <p className="text-5xl font-extralight  mt-[-8px] text-slate-200">
                /
              </p>

              <div className="place-content-center w-8 h-8 bg-slate-300 border-red-700 border-2  mt-1  mr-4 rounded-lg">
                <p className="text-4xl font-extrabold text-red-700  mt-[-16px] ml-2   ">
                  .
                </p>
              </div>
            </div>
            <div className="flex mt-16 border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest" >
            Bombay Masala Grilled Cheese
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-1">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex  border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-6 " >
            Chicken Seekh Kebab SANDWICH
            <p className="text-yellow-300 font-bold">179/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg mt-6"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 mt-6 w-80 tracking-widest" >
            Mumbai Vada Pav
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-6  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-8" >
            Butter Chicken Naanwich
            <p className="text-yellow-300 font-bold">169/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-5  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex  border-yellow-500  border-r-2 ">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-8" >
            Masala Grilled Fish Sandwich
            <p className="text-yellow-300 font-bold">199/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-5  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex  border-yellow-500  border-r-2 ">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-8" >
            Veg Seekh Kebab Sub
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg mt-6"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            {isOpen &&(
              <div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 mt-6 w-80 tracking-widest" >
            Mumbai Vada Pav
            <p className="text-yellow-300 font-bold">139/-</p>
            </div>
            
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6 ">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-6  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            <div className="flex border-yellow-500  border-r-2">
            <div className="text-white text-xl font-semibold ml-14 w-80 tracking-widest mt-8" >
            Butter Chicken Naanwich
            <p className="text-yellow-300 font-bold">169/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-red-700  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2 mt-5  mx-4 rounded-lg"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            </div>
            </div>
            )}
          </div>
        
        </div>
        <div className="text-center text-white ml-10">
        <button className="text-5xl  " onClick={toggleReadMoreLess}><IoArrowDownCircleOutline /></button>
        </div>
      </div>
    </div>
  );
};

export default BSMenu;
