import React from "react";
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

const Menu1 = () => {
  return (
    <div className="bg-menu1 lg:h-[1800px]   overflow-x-hidden ">
      <div className=" relative top-28 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <div className="container border-red-800 border-2  ">
          <img src={Menu1first} className="h-96 w-full whitespace-pre object-cover " />
        </div> */}
        {/* <div className="flex w-full">
          <div className="bg-white ml-6 w-[555px] h-px border-0 float-left mt-8"></div>
          <div className="text-2xl text-white m-4 tracking-widest font-semibold ">
            WHAT’S ON YOUR MIND?
          </div>
          <div className="bg-white mr-6 w-[550px] h-px border-0 float-right mt-8"></div>
        </div> */}
        {/* <div className="w-full">
          <div className="flex justify-evenlyely m-2  ">
            <img src={Burger} className="w-40 h-40 rounded-full mx-32 my-16" />
            <img src={Chinese} className="w-40 h-40 rounded-full mx-32 my-16" />
            <img
              src={Starters}
              className="w-40 h-40 rounded-full mx-32 my-16"
            />
          </div>
          <div className="flex justify-evenly m-2 ">
            <img src={Sides} className="w-40 h-40 rounded-full mx-32 my-16" />
            <img src={Salads} className="w-40 h-40 rounded-full mx-32 my-16" />
            <img
              src={Desserts}
              className="w-40 h-40 rounded-full mx-32 my-16"
            />
          </div>
          <div className="flex justify-evenly m-2 ">
            <img
              src={MainCoure}
              className="w-40 h-40 rounded-full mx-32 my-16"
            />
            <img src={Combo} className="w-40 h-40 rounded-full mx-32 my-16" />
            <img
              src={Beverage}
              className="w-40 h-40 rounded-full mx-32 my-16"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Menu1;
