import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu1 from "../../assets/image/menu1.jpeg";
import Burger1 from "../../assets/image/burger1.png"
import Burger2 from "../../assets/image/burger2.png"
import Burger3 from "../../assets/image/burger3.png"
import Burger4 from "../../assets/image/burger4.png"
import Burger5 from "../../assets/image/burger5.png"
import Burger6 from "../../assets/image/burger6.png"
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
        <div className="flex text-white text-xs font-extralight lg:text-3xl lg:font-semibold mt-4 mx-1 lg:mx-2  tracking-widest w-full">
          <p className=" px-2 lg:px-10 hover:text-welcome">BURGER & SANDWICHES</p>
          <Link to='/chiense'>
          <p className=" px-2 lg:px-10">CHINESE CUSINE</p>
          </Link>
          <Link to='/starters'>
          <p className="px-1 lg:px-10">STARTERS</p>
          </Link>
          <p className="px-2 lg:px-10">SIDES</p>
          <p className="px-1 lg:px-10 ic ">SALADS</p>
          <Link to="/chiense">
            <p className="py-1 text-xs lg:text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
        <div className="lg:flex  w-full mt-10 pl-10">
          <div className="flex flex-col sm:w-full lg:w-1/2 ">
            <div className="flex bg-welcome rounded-2xl w-52 lg:w-72 lg:ml-20 lg:pl-6  lg:mr-96 lg:py-2 ">
              <div className="lg:text-3xl text-xl font-semibold text-white  ml-4 mr-6 tracking-wider">
                BURGERS
              </div>
              <div className="place-content-center w-6 h-6  lg:w-8 lg:h-8 bg-slate-300 border-green-500 border-2  mt-1  rounded-lg">
                <p className="text-4xl font-extrabold text-green-500 lg:mt-[-16px] mt-[-92%] sm:ml-1 text-center   ">
                  .
                </p>
              </div>

              <p className=" text-3xl  lg:text-5xl font-extralight mt-[-2%] lg:mt-[-8px] text-slate-200">
                /
              </p>

              <div className="place-content-center w-6 h-6 lg:w-8 lg:h-8 bg-slate-300 border-red-700 border-2  mt-1  mr-4 rounded-lg">
                <p className="text-4xl font-extrabold text-red-700 text-center mt-[-92%] lg:mt-[-16px] ">
                  .
                </p>
              </div>
            </div>
            <div className="flex mt-6 lg:mt-16 border-yellow-500  lg:border-r-2">
            <div className="text-white lg:text-xl font-semibold lg:ml-14 w-80 tracking-widest" >
            Tandoori Chicken Tikka Burger
            <p className="text-yellow-300 font-bold">210/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2 mr-2 rounded-lg mt-1">
                <p className="text-5xl font-extrabold text-red-700  lg:mt-[-24px] mt-[-120%]  text-center ">
                  .
                </p>
              </div>
              <div>
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg ic "><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
           
            </div>
            <div className="flex  border-yellow-500  border-r-2">
            <div className="text-white lg:text-xl font-semibold lg:ml-14 w-80 tracking-widest mt-6 " >
            Paneer Bhurji Burger
            <p className="text-yellow-300 font-bold">169/-</p>
            </div>
            <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-7">
                <p className="text-5xl font-extrabold text-green-500  lg:mt-[-24px] mt-[-120%] text-center   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-6 ic">- 1 +</p>
            </div>
            <div className=" bg-red-400  text-center  w-24 h-12 py-2  mx-4 rounded-lg mt-6 ic"><p className="text-2xl text-white font-bold ">ADD +</p></div>
            <div className="mr-4 hid mt-6">
            <img src={Menu1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%]  rounded-lg ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>

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
          <div className="flex flex-col  lg:w-1/2 mt-4">
            <div className="flex bg-welcome mr-40 h-10 lg:w-50 lg:h-14 rounded-2xl lg:ml-20 lg:pl-6  lg:mr-80 pl-2 lg:py-2 ">
              <div className="lg:text-3xl text-xl font-semibold text-white mr-2 tracking-wider">
                SANDWICHES
              </div>
              <div className="place-content-center lg:w-8 lg:h-8 w-6 h-6 bg-slate-300 border-green-500 border-2  mt-1  rounded-lg">
                <p className="text-4xl font-extrabold text-green-500 lg:mt-[-16px] mt-[-98%] lg:ml-2 ml-1   ">
                  .
                </p>
              </div>

              <p className="lg:text-5xl text-3xl font-extralight mt-[-4px] lg:mt-[-8px] text-slate-200">
                /
              </p>

              <div className="place-content-center lg:w-8 lg:h-8 w-6 h-6 bg-slate-300 border-red-700 border-2  mt-1  mr-4 rounded-lg">
                <p className="text-4xl font-extrabold text-red-700  lg:mt-[-16px] mt-[-98%] ml-1 lg:ml-2   ">
                  .
                </p>
              </div>
            </div>
            <div className="flex  mt-16 border-yellow-500  lg:border-r-2">
            <div className="text-white lg:text-xl font-semibold lg:ml-14  w-80 tracking-widest" >
            Bombay Masala Grilled Cheese
            <p className="text-yellow-300 font-bold">159/-</p>
            </div>
            <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2 mr-2 rounded-lg mt-1">
                <p className="text-5xl font-extrabold text-green-500  mt-[-24px] ml-[28%]   ">
                  .
                </p>
              </div>
              <div >
              <p className=" bg-slate-300 lg:px-1 lg:py-2 lg:rounded-full lg:text-center min-[320px]:display:none max-[425px]:display:block">- 1 +</p>
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
