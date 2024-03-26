import React from "react";
import Salads2 from "../../assets/image/salads2.jpeg";
import Burger1 from '../../assets/image/burger1.png'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Salads = () => {
  return (
    <div className="h-fit pb-40 bg-menu1">
      <div className=" relative top-32">
        <div className="container w-full">
          <img
            src={Salads2}
            className="lg:h-[60vh] w-full h-[40vh] px-2 object-cover bg-no-repeat"
          />
        </div>
        <div className="flex text-white lg:text-3xl xs:text-[3vw] text-xs xs:font-semibold lg:font-semibold mt-4 mx-1  lg:tracking-widest xs:tracking-tighter w-full">
          <Link to="/sides">
            <p className="py-1 px-4 xs:px-1 lg:text-3xl">
              <FaArrowLeft />
            </p>
          </Link>
          <p className="xs:px-1 lg:px-14">SALADS</p>
          <p className="xs:px-1 sm:px-2 lg:px-14">DESSERTS/ICE-CREAM</p>
          <p className="xs:px-2 sm:px-2 lg:px-14">MAIN COURSE</p>
          <p className="xs:px:1 lg:px-14">VALUE COMBO</p>
          <Link to="/desserts">
            <p className="py-1 px-2 xs:px-2 lg:text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
        <div className="lg:flex w-full mt-14 lg:pl-10">
          <div className="flex flex-col lg:w-1/2 lg:pl-10  border-yellow-500  lg:border-r-2">
            <div className="flex mt-8 ">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                CLASSIC CAESAR SALAD
                <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold  text-green-500 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center  ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                MEDITERRANEAN CHICKPEA SALAD
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                ASIAN SESAME NOODLE SALAD
                <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                SUMMER BERRY SPINACH SALAD
                <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-green-500 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center  ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                GRILLED CHICKEN AVOCADO SALAD
                <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center  ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                SHRIMP AND MANGO SALAD{" "}
                <span className="text-lg ">(MANGO SUBSTITUTE AVAILABLE)</span>
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                TUNA NICOISE SALAD
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white lg:text-xl font-semibold ml-4 w-72 lg:w-96 tracking-widest">
                THAI BEEF SALAD
                <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div className="place-content-center w-8 h-6 lg:w-10 lg:h-8 bg-slate-300 border-red-700 border-2  mt-2 lg:mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 lg:mt-[-70%] sm:mt-[-110%] xs:mt-[-160%] text-center  ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div>
          </div>
          <div className='flex flex-col lg:pl-16'>
          <p className='lg:text-3xl font-bold text-white lg:ml-20 mt-8'>ENHANCEMENTS</p>
          <div className="flex mt-8">
              <div className="text-white lg:text-xl  font-semibold ml-4 w-80 lg:w-96 lg:tracking-widest">
                PROTEIN ADD-ONS
               
                <p className="text-base sm:text-xs xs:text-xs xs:font-extralight uppercase font-semibold lg:w-80"><span className="text-4xl  ">.</span>Description: Customize your salad with additional grilled chicken, shrimp, salmon, or tofu for an extra protein boost.</p>
                
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 sm:ml-6 hid ">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div> 
            <div className="flex mt-4">
              <div className="text-white lg:text-xl  font-semibold ml-4 w-80 lg:w-96 lg:tracking-widest">
                GLUTEN-FREE OPTIONS AVAILABLE
               
                <p className="text-base sm:text-xs xs:text-xs uppercase xs:font-extralight font-semibold lg:w-80"><span className=" text-4xl ">.</span>Description: Ask your server for gluten-free alternatives for select salads.</p>
                
                <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ic">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg ic">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
              <div className="mr-4 hid sm:ml-6">
            <img src={Burger1} className="w-20 h-14  "/>
            <div className="bg-slate-100 w-10 h-4 ml-4 text-xs mt-[-4%] rounded-lg xs:mr-4 ">
            <p className=" bg-shadow text-center">- 1 +</p>
            </div>
            </div>
            </div> 
          </div>
        </div>
        </div>
    </div>
    
  );
};

export default Salads;
