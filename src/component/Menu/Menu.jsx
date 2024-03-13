import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestOffer1 from "../../assets/image/bestOffer1.jpeg";
import BestOffer2 from "../../assets/image/bestOffer2.jpeg";
import BestOffer3 from "../../assets/image/bestOffer3.jpeg";
import BestOffer4 from "../../assets/image/bestOffer4.jpeg";
import HotDrink from "../../assets/image/hotBeverages.jpeg";
import ColdDrink from "../../assets/image/coldBeverages.jpeg";
import Coffee from "../../assets/image/specialtyDrinks.jpeg";
import Burger from "../../assets/image/burger.jpeg";
import Salads from "../../assets/image/salads.jpeg";
import Pastes from "../../assets/image/pastes.jpeg";
import Combo from "../../assets/image/combo.png";
import { IoGiftOutline } from "react-icons/io5";

const Menu = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  
  
  const data = [
    {
      img: BestOffer1,
      special: "SPECIAL PROMO",
      buco: "BURGER COMBO",
      order1: "ORDER NOW",
      buyget: "BUY GET",
    },
    {
      img: BestOffer2,
      special1: "DELICIOUS COMBO",
      combo: ".PEPSI .BURGER .FRENCH FRIES",
    },
    {
      img: BestOffer3,
    },
    {
      img: BestOffer4,
    },
    {
      img: BestOffer1,
      special: "SPECIAL PROMO",
      buco: "BURGER COMBO",
      order1: "ORDER NOW",
      buyget: "BUY GET",
    },
    {
      img: BestOffer2,
      special1: "DELICIOUS COMBO",
      combo: ".PEPSI .BURGER .FRENCH FRIES",
    },
  ];
  return (
    <div className="h-[2500px]  bg-menu-bgcolor">
      <div className="mt-36 absolute">
        <div className="lg:ml-[550px] flex ">
          <div className="bg-welcome px-1 w-32 h-px border-0  mt-4"></div>
          <div className="flex flex-col">
            <div className="text-welcome uppercase text-4xl font-light tracking-widest ml-2 mr-2 ">
              sunset
            </div>
            <div className="font-cafe text-4xl text-white uppercase text-center">
              Cafe
            </div>
          </div>
          <div className="bg-welcome px-2 w-32 h-px border-0 mt-4"></div>
        </div>
        {/* DRINKS CATEGORIES */}
        <div className="flex justify-between align-middle pl-20 mt-11 ">
          <div className="mr-52 ml-20 ">
            <img src={HotDrink} className="w-60 h-60 rounded-full" />
            <div className="uppercase bg-welcome text-white font-bold text-xl p-2 rounded-3xl mt-4 text-center">
              Hot Beverages
            </div>
          </div>
          <div className="mr-52">
            <img src={ColdDrink} className="w-60 h-60 rounded-full" />
            <div className="uppercase bg-welcome text-white font-bold text-xl p-2 rounded-3xl mt-4 text-center">
              Cold Beverages
            </div>
          </div>
          <div>
            <img src={Coffee} className="w-60 h-60 rounded-full mr-36" />
            <div className="uppercase bg-welcome text-white font-bold text-xl p-2 rounded-3xl mt-4 text-center mr-36">
              specialty Drinks
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col mt-4 pl-40  border-r-2 border-lines pr-[100px]">
            <div className="flex border-b-2 border-lines w-fit ">
              <div className="text-white text-3xl ">
                <h1>Espresso</h1>
                <p className="text-xs w-40 py-4">
                  A single shot of concentrated Coffee
                </p>
              </div>
              <div className="flex flex-col  ml-16 ">
                <div className="">
                  <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                    +
                  </button>
                </div>
                <div className="text-white text-xl pt-2 ">Rs.120</div>
              </div>
            </div>
            <div className="flex border-b-2 border-lines w-fit pt-4  ">
              <div className="text-white text-3xl ">
                <h1>Cappuccino</h1>
                <p className="text-xs w-40 py-4">
                  Equal parts espresso steamed milk, and foam
                </p>
              </div>
              <div className="flex flex-col  ml-16 ">
                <div className="">
                  <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                    +
                  </button>
                </div>
                <div className="text-white text-xl pt-2">Rs.250</div>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit pt-4  ">
              <div className="text-white text-3xl ">
                <h1>Americano</h1>
                <p className="text-xs w-40 py-4">
                  Espresso shots with hot water
                </p>
              </div>
              <div className="flex flex-col  ml-16 ">
                <div className="">
                  <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                    +
                  </button>
                </div>
                <div className="text-white text-xl pt-2">Rs.158</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 pl-28  border-r-2 border-lines pr-[100px]">
            <div className="flex border-b-2 border-lines w-fit ">
              <div className="text-white text-2xl pr-20 ">
                <h1>Iced Coffee</h1>
                <div className="text-white text-xl ">Rs.140</div>
              </div>
              <div className="ml-4 mt-4">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2 border-lines w-fit   ">
              <div className="text-white text-2xl ">
                <h1>Iced Latte</h1>
                <div className="text-white text-xl ">Rs.140</div>
              </div>
              <div className="ml-28 mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit   ">
              <div className="text-white text-2xl ">
                <h1>Frappuccino</h1>
                <div className="text-white text-xl ">Rs.140</div>
              </div>
              <div className="ml-[86px] mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit  ">
              <div className="text-white text-2xl pr-2">
                <h1>Affogato</h1>
                <div className="text-white text-xl  ">Rs.140</div>
              </div>
              <div className="ml-28 mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full ">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit  ">
              <div className="text-white text-2xl pr-4 ">
                <h1>Ice Latte</h1>
                <div className="text-white text-xl pb-2 ">Rs.140</div>
              </div>
              <div className="  ml-28 mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 pl-28">
            <div className="flex border-b-2 border-lines w-fit ">
              <div className="text-white text-2xl pr-20 ">
                <h1>Iced Coffee</h1>
                <div className="text-white text-xl ">Rs.140</div>
              </div>
              <div className="ml-4 mt-4">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2 border-lines w-fit   ">
              <div className="text-white text-2xl ">
                <h1>Iced Latte</h1>
                <div className="text-white text-xl ">Rs.140</div>
              </div>
              <div className="ml-28 mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit   ">
              <div className="text-white text-2xl ">
                <h1>Frappuccino</h1>
                <div className="text-white text-xl ">Rs.140</div>
              </div>
              <div className="ml-[86px] mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit  ">
              <div className="text-white text-2xl pr-2">
                <h1>Affogato</h1>
                <div className="text-white text-xl  ">Rs.140</div>
              </div>
              <div className="ml-28 mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full ">
                  +
                </button>
              </div>
            </div>
            <div className="flex border-b-2  border-lines w-fit  ">
              <div className="text-white text-2xl pr-4 ">
                <h1>Ice Latte</h1>
                <div className="text-white text-xl pb-2 ">Rs.140</div>
              </div>
              <div className="  ml-28 mt-4 ">
                <button className="bg-plus-icon  w-6 h-6 font-extrabold rounded-full">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full ">
          <div className="border-t-2 ml-2 border-welcome mt-32 lg:w-[550px]"></div>
          <div className="ml-16 mr-4 mt-24 bg-welcome font-bold text-white px-14 w-fit py-6 text-lg">
            OTHER CATEGORIES
          </div>
          <div className="border-t-2 ml-10 mt-32 border-welcome lg:w-[550px] "></div>
        </div>
        {/* images section */}
        <div className="flex justify-evenly mt-10">
          <div>
            <img src={Burger} className="w-52 h-52 rounded-3xl " />
            <p className="text-center text-white text-xl mt-2">
              BURGER & SANDWICHES
            </p>
          </div>
          <div>
            <img src={Salads} className="w-72 h-60  rounded-3xl mt-4" />
            <p className="text-center text-white text-xl mt-2">SALADS</p>
          </div>
          <div>
            <img src={Pastes} className="w-72 h-60  rounded-3xl mt-4" />
            <p className="text-center text-white text-xl mt-2">
              DESSERTS / ICE-CREAM
            </p>
          </div>
          <div>
            <img src={Combo} className="w-52 h-52  rounded-3xl" />
            <p className="text-center text-white text-xl mt-2">value combo</p>
          </div>
        </div>
        <div className=" mt-20 flex justify-center text-center">
          <button className=" text-white text-3xl bg-explore rounded-3xl font-bold tracking-widest px-8 py-4 w-fit">
            EXPLORE
          </button>
        </div>
        <div className="flex">
          <div className="border-t-2 ml-2 border-welcome mt-20 lg:w-[600px]"></div>
          <div className="ml-10 mr-16 text-white text-3xl mt-16 tracking-widest flex ">
            BEST OFFERS{" "}
            <span className=" w-6 mt-1 pl-6">
              <IoGiftOutline />
            </span>
          </div>
          <div className="border-t-2 ml-2 border-welcome mt-20 lg:w-[550px]"></div>
        </div>
        <div className="w-40 flex absolute h-40 ">
          <div className=" flex pl-2 pr-2 pb-20 ">
          <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
