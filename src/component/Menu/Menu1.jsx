import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import Menu1first from "../../assets/image/menu1first.png";
import Burger from "../../assets/image/burger.jpeg";
import Chinese from "../../assets/image/chinese.jpeg";
import Starters from "../../assets/image/starters.jpeg";
import Sides from "../../assets/image/sides.jpeg";
import Salads from "../../assets/image/salads.jpeg";
import Desserts from "../../assets/image/deserts.jpeg";
import MainCoure from "../../assets/image/main.jpeg";
import Combo from "../../assets/image/combo.png";
import Beverage from "../../assets/image/bestOffer4.jpeg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMoreLess = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-menu1 lg:h-[1800px]   overflow-x-hidden ">
      <div className=" relative top-28 p-1 m-1">
        <div className="container ">
          <img src={Menu1first} className="h-96 w-full whitespace-pre object-cover " />
        </div>
        <div className="flex w-full">
          <div className="bg-white ml-6 w-[540px] h-px border-0  mt-10"></div>
          <div className="text-2xl text-white my-6 mx-4  tracking-widest font-semibold ">
            WHAT’S ON YOUR MIND?
          </div>
          <div className="bg-white mr-6 w-[535px] h-px border-0  mt-10"></div>
        </div>
        <div className="w-full">
          <div className="flex justify-evenlyely m-2  ">
          <Link to="/bsmenu">
          <div className=" mx-28 my-16 ">
            <img src={Burger} className="w-52 h-52 rounded-full ml-8 " />
            <p className="text-2xl text-white font-semibold text-center mt-2">BURGER & SANDWICHES</p>
          </div>  
          </Link>
          <Link to="/chiense">
          <div className=" mx-36 my-16">
            <img src={Chinese} className="w-52 h-52 rounded-full" />
            <p className="text-2xl text-white font-semibold text-center  mt-2">CHINESE CUSINE</p>
          </div>
          </Link>
          <div className="mx-28 my-16">
            <img
              src={Starters}
              className="w-52 h-52 rounded-full "
            />
            <p className="text-2xl text-white font-semibold text-center  mt-2">STARTERS</p>
            </div>
          </div>
          <div className="flex justify-evenly m-2 ">
          <div className=" mx-28 my-16">
            <img src={Sides} className="w-52 h-52 rounded-full " />
            <p className="text-2xl text-white font-semibold text-center  mt-2">SIDES</p>
            </div>
            <div className=" mx-28 my-16">
            <img src={Salads} className="w-52 h-52 rounded-full" />
            <p className="text-2xl text-white font-semibold text-center  mt-2">SALADS</p>
            </div>
            <div className="mx-28 my-16">
            <img src={Desserts} className="w-52 h-52 rounded-full " />
             <p className="text-2xl text-white font-semibold text-center  mt-2">DESSERTS / ICE-CREAM</p>
          </div>
          </div>
          <div className="flex justify-evenly m-2 ">
          <div className="mx-28 my-16">
            <img src={MainCoure} className="w-52 h-52 rounded-full " />
            <p className="text-2xl text-white font-semibold text-center  mt-2">MAIN COURSE</p>
            </div>
            <div className=" mx-28 my-16">
            <img src={Combo} className="w-52 h-52 rounded-full" />
            <p className="text-2xl text-white font-semibold text-center  mt-2">value combo</p>
            </div>
            <div className="mx-28 my-16">
            <img src={Beverage} className="w-52 h-52 rounded-full " />
            <p className="text-2xl text-white font-semibold text-center  mt-2">BEVERAGES</p>
            </div>
          </div>
          {isOpen && (
          <div className="flex justify-evenly m-2 ">
          <div className=" mx-28 my-16">
            <img src={Sides} className="w-52 h-52 rounded-full " />
            <p className="text-2xl text-white font-semibold text-center  mt-2">SIDES</p>
            </div>
            <div className=" mx-28 my-16">
            <img src={Salads} className="w-52 h-52 rounded-full" />
            <p className="text-2xl text-white font-semibold text-center  mt-2">SALADS</p>
            </div>
            <div className="mx-28 my-16">
            <img src={Desserts} className="w-52 h-52 rounded-full " />
             <p className="text-2xl text-white font-semibold text-center  mt-2">DESSERTS / ICE-CREAM</p>
          </div>
          </div>
          )}
          <div >
          <button
              className="text-white  lg:text-3xl  flex ml-[690px] font-bold uppercase tracking-wider hover:text-black  "
              onClick={toggleReadMoreLess}
            >
            <span className="text-3xl text-black rounded-full bg-stone-700 border-black border-2 border-r-1 w-8 h-8 mx-2 my-1"> <MdKeyboardArrowDown /></span> {isOpen ? "More Less" : "See More"}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu1;
