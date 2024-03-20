import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className=" relative top-24 p-1 m-1">
        <div className="container ">
          <img
            src={Menu1first}
            className="lg:h-96 w-full whitespace-pre object-cover "
          />
        </div>
        <div className="flex w-full">
          <div className="bg-white lg:ml-6 lg:w-[540px] w-16 h-px border-0  mt-10"></div>
          <div className="lg:text-2xl text-xs text-white  lg:my-6 my-8  lg:mx-4 mx-2 lg:tracking-widest lg:font-semibold ">
            WHAT’S ON YOUR MIND?
          </div>
          <div className="bg-white lg:mr-6 lg:w-[535px] w-14 h-px border-0  mt-10"></div>
        </div>
  
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/bsmenu">
            <div className=" lg:mx-28 ml-8  lg:my-16 ">
              <img
                src={Burger}
                className="lg:w-52 w-20 lg:h-52 h-20 rounded-full lg:ml-8 "
              />
              <p className="lg:text-2xl text-xs text-white lg:font-semibold lg:text-center mt-2 mr-4">
                BURGER & SANDWICHES
              </p>
            </div>
          </Link>
          <Link to="/chiense">
            <div className=" lg:mx-36 mx-2 lg:my-16 ">
              <img
                src={Chinese}
                className="lg:w-52 w-20 lg:h-52 h-20 rounded-full"
              />
              <p className="lg:text-2xl text-xs text-white font-semibold text-center  mt-2">
                CHINESE CUSINE
              </p>
            </div>
          </Link>
          <div className="lg:mx-28 ml-8 lg:my-16 ">
            <img
              src={Starters}
              className="lg:w-52 w-20 lg:h-52 h-20 rounded-full "
            />
            <p className="lg:text-2xl text-xs text-white font-semibold pl-4 lg:text-center  mt-2">
              STARTERS
            </p>
          </div>

          <div className=" lg:mx-28 lg:my-16 ">
            <img
              src={Sides}
              className="lg:w-52 w-20 lg:h-52 h-20 rounded-full "
            />
            <p className="lg:text-2xl text-xs text-white font-semibold pl-6 lg:text-center  mt-2">
              SIDES
            </p>
          </div>
          <div className=" lg:mx-28 ml-8 lg:my-16 ">
            <img
              src={Salads}
              className="lg:w-52 w-20 lg:h-52 h-20 rounded-full"
            />
            <p className="lg:text-2xl text-xs text-white font-semibold pl-4 lg:text-center  mt-2">
              SALADS
            </p>
          </div>
          <div className="lg:mx-28 lg:my-16">
            <img
              src={Desserts}
              className="lg:w-52 w-20 lg:h-52 h-20 rounded-full "
            />
            <p className="lg:text-2xl text-xs text-white font-semibold text-center  mt-2">
              DESSERTS / ICE-CREAM
            </p>
          </div>

          <div className="lg:mx-28 ml-8 lg:my-16">
            <img src={MainCoure} className="lg:w-52 w-20 lg:h-52 h-20 rounded-full " />
            <p className="lg:text-2xl text-xs text-white font-semibold text-center  mt-2">
              MAIN COURSE
            </p>
          </div>
          <div className="lg:mx-28 lg:my-16 ">
            <img src={Combo} className="lg:w-52 w-20 lg:h-52 h-20 rounded-full" />
            <p className="lg:text-2xl text-xs  text-white font-semibold pr-8 text-center  mt-2">
              value combo
            </p>
          </div>
          <div className="lg:mx-28 ml-8 lg:my-16">
            <img src={Beverage} className="lg:w-52  w-20 lg:h-52 h-20 rounded-full " />
            <p className="lg:text-2xl text-xs text-white font-semibold text-center  mt-2">
              BEVERAGES
            </p>
          </div>

          {isOpen && (
            <div className="grid grid-cols-3 gap-8">
              <div className=" mx-28 my-16">
                <img src={Sides} className="w-52 h-52 rounded-full " />
                <p className="text-2xl text-white font-semibold text-center  mt-2">
                  SIDES
                </p>
              </div>
              <div className=" mx-28 my-16">
                <img src={Salads} className="w-52 h-52 rounded-full" />
                <p className="text-2xl text-white font-semibold text-center  mt-2">
                  SALADS
                </p>
              </div>
              <div className="mx-28 my-16">
                <img src={Desserts} className="w-52 h-52 rounded-full " />
                <p className="text-2xl text-white font-semibold text-center  mt-2">
                  DESSERTS / ICE-CREAM
                </p>
              </div>
            </div>
          )}
          <div>
            <button
              className="text-white  lg:text-3xl grid grid-flow-col-dense ml-[690px] font-bold uppercase tracking-wider hover:text-black  "
              onClick={toggleReadMoreLess}
            >
              <span className="text-3xl text-black rounded-full bg-stone-700 border-black border-2 border-r-1 w-8 h-8 mx-2 my-1">
                {" "}
                <MdKeyboardArrowDown />
              </span>{" "}
              {isOpen ? "More Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu1;
