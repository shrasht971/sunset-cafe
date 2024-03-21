import React from "react";
import Salads2 from "../../assets/image/salads2.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Salads = () => {
  return (
    <div className="h-[1600px] bg-menu1">
      <div className="w-full relative top-32">
        <div className="container w-full">
          <img
            src={Salads2}
            className="h-[500px] w-full px-2 object-cover bg-no-repeat"
          />
        </div>
        <div className="flex text-white text-3xl font-semibold mt-4 mx-1  tracking-widest w-full">
          <Link to="/sides">
            <p className="py-1 px-4 text-3xl">
              <FaArrowLeft />
            </p>
          </Link>
          <p className="px-14">SALADS</p>
          <p className="px-14">DESSERTS/ICE-CREAM</p>
          <p className="px-14">MAIN COURSE</p>
          <p className="px-14">VALUE COMBO</p>
          <Link to="/desserts">
            <p className="py-1 px-2  text-3xl">
              <FaArrowRight />
            </p>
          </Link>
        </div>
        <div className="flex w-full mt-14 pl-10">
          <div className="flex flex-col w-1/2 pl-10  border-yellow-500  border-r-2">
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                CLASSIC CAESAR SALAD
                <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                MEDITERRANEAN CHICKPEA SALAD
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                ASIAN SESAME NOODLE SALAD
                <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                SUMMER BERRY SPINACH SALAD
                <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-green-500 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-green-500 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                GRILLED CHICKEN AVOCADO SALAD
                <p className="text-yellow-300 font-bold">159/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-[55%] tracking-widest">
                SHRIMP AND MANGO SALAD{" "}
                <span className="text-lg ">(MANGO SUBSTITUTE AVAILABLE)</span>
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                TUNA NICOISE SALAD
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="text-white text-xl font-semibold ml-4 w-96 tracking-widest">
                THAI BEEF SALAD
                <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div className="place-content-center w-10 h-8 bg-slate-300 border-red-700 border-2  mt-2 mr-8 mx-2 rounded-lg">
                <p className="text-5xl font-extrabold text-red-700 mt-[-24px] ml-3   ">
                  .
                </p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col pl-16'>
          <p className='text-3xl font-bold text-white ml-20 mt-8'>ENHANCEMENTS</p>
          <div className="flex mt-8">
              <div className="text-white text-xl font-bold ml-4 w-96 tracking-widest">
                PROTEIN ADD-ONS
               
                <p className="text-base uppercase font-semibold w-80"><span className="text-4xl  ">.</span>Description: Customize your salad with additional grilled chicken, shrimp, salmon, or tofu for an extra protein boost.</p>
                
                <p className="text-yellow-300 font-bold">149/-</p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div> 
            <div className="flex mt-4">
              <div className="text-white text-xl font-bold ml-4 w-96 tracking-widest">
                GLUTEN-FREE OPTIONS AVAILABLE
               
                <p className="text-base uppercase font-semibold w-80"><span className="text-4xl">.</span>Description: Ask your server for gluten-free alternatives for select salads.</p>
                
                <p className="text-yellow-300 font-bold">139/-</p>
              </div>
              <div>
                <p className=" bg-slate-300 px-1 py-2 rounded-full text-center mt-1 ">
                  - 1 +
                </p>
              </div>
              <div className=" bg-red-400  text-center  w-24 h-12 py-2 mx-1 rounded-lg">
                <p className="text-2xl text-white font-bold ">ADD +</p>
              </div>
            </div> 
          </div>
        </div>
        </div>
    </div>
    
  );
};

export default Salads;
