import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import chef from "../../assets/image/chef.jpeg";
import Deal1 from "../../assets/image/deals_b1.png";
import Deal2 from "../../assets/image/deals1.png";
import Reservations from "../../assets/image/Reservation.jpeg";
import PreviousLanding from "../PreviousLanding/PreviousLanding";

const Landingpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMoreLess = () => {
    setIsOpen(!isOpen);
  };
  // Deals
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const data = [
    {
      img: Deal1,
      flat: "FLAT",
      off: "₹75 OFF",
      order: "ON ORDER ABOVE ₹399",
      code: "FGU87",
    },
    {
      img: Deal2,
      flat: "FLAT",
      off: "₹100 OFF",
      order: "ON ORDER ABOVE ₹599",
      code: "RTH23",
    },
    {
      img: Deal1,
      flat: "FLAT",
      off: "₹75 OFF",
      order: "ON ORDER ABOVE ₹399",
      code: "FGU87",
    },
    {
      img: Deal2,
      flat: "FLAT",
      off: "₹100 OFF",
      order: "ON ORDER ABOVE ₹599",
      code: "RTH23",
    },
    {
      img: Deal1,
      flat: "FLAT",
      off: "₹75 OFF",
      order: "ON ORDER ABOVE ₹399",
      code: "FGU87",
    },
    {
      img: Deal2,
      flat: "FLAT",
      off: "₹100 OFF",
      order: "ON ORDER ABOVE ₹599",
      code: "RTH23",
    },
  ];
  // Subscribes
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data1 = [
    {
      feedback:
        "I just had the best time at Sunset Cafe! It was so cozy and welcoming. The coffee smelled amazing, and the people there were so friendly. The food? Delicious! I can't wait to go back again and again. It's definitely my new favorite spot!",
    },
    {
      feedback:
        "The Sunset Cafe is my go-to place now! The ambiance is just perfect, and the service is top-notch. From the moment I walked in, I felt at home. The coffee and food were exceptional, and I can't wait to visit again!",
    },
    {
      feedback:
        "Sunset Cafe exceeded all my expectations! The atmosphere is so warm and inviting, and the staff is incredibly friendly. The coffee was heavenly, and don't even get me started on the pastries! Sunset Cafe has definitely won my heart.",
    },
  ];

  return (
    <>
      <div className="bg-[url(./assets/image/section1bg.jpg)] bg-cover bg-center h-[700px] lg:h-svh relative">
      <div className='absolute w-full h-full top-0 bottom-0 right-0 left-0 z-20 bg-my-color'>
      
        {/* Welcome section */}
        <PreviousLanding />
      </div>
      </div>
      {/* About us section */}
      <div className='lg:h-fit lg:w-full h-[520px] bg-about'>
      <div className="w-full lg:flex lg:justify-between ">
        <div className="w-full lg:w-2/3 lg:pl-12">
          <h3 className="text-black p-1 pl-24 lg:p-4 lg:text-3xl font-semibold ">
            ABOUT US
          </h3>
          <h1 className="font-extrabold text-lg pl-8 pb-2 lg:text-4xl lg:pb-4 lg:pl-4">
            The story behind sunset...
          </h1>
          <p className="text-xs mt-52 lg:mt-2 lg:text-3xl lg:pb-4 lg:pl-4 lg:pr-24 lg:space-x-3">
            Welcome to Sunset Café, where our journey began with Chef André's
            bold decision to depart from the world of haute cuisine and create a
            culinary sanctuary rooted in simplicity and heartfelt connection.
            <br />
            <br />
            Inspired by a chance encounter with a charming café bathed in the
            warm glow of twilight, Chef André envisioned a place where genuine
            hospitality and exceptional flavors intertwine. At Sunset Café, each
            dish is a reflection of Chef André's dedication to crafting culinary
            experiences that nourish both body and soul.
          </p>
          {isOpen && (
            <p className="text-sm lg:text-2xl lg:pb-11 lg:pl-4 line-clamp-2 hover:line-clamp-none ">
              hfbidhfojdpo wksbvediheouhdouq
              dehfoehdpjedhfh'3pe;fgeujebrojiehwwkdkqwjdio4uhfpiedlebfoiewufg
            </p>
          )}
          <div className="lg:pl-4">
            <button
              className="text-black text-xs px-4 py-2 lg:text-lg rounded-xl border-b lg:w-52 lg:h-18 bg-orange-500 lg:px-2 lg:py-4 text-center font-bold uppercase tracking-wider hover:bg-red-900 lg:mb-8 lg:ml-11"
              onClick={toggleReadMoreLess}
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="lg:h-96 lg:w-96 h-52 w-52  mt-[-420px] ml-11 lg:justify-end lg:mx-0.5 lg:my-20 lg:mr-28 border-r-8 border-r-black rounded-full">
          <img
            src={chef}
            className="w-full h-full rounded-full border-r-black border-r-8 "
          />
        </div>
      </div>
      </div>
      {/* Deals and offers section */}
      <div>
        <div className="bg-deal  lg:w-full lg:h-fit lg:pl-20 lg:pr-20 pl-6 pr-6 pb-20">
          <div className="lg:text-3xl font-bold uppercase  mb-8 lg:p-4">
            {" "}
            Deals and Offers
          </div>

          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.off} className="bg-deals rounded-xl ">
                <div>
                  <img
                    src={d.img}
                    alt=""
                    className="h-28 w-28 lg:h-60 lg:w-80 lg:ml-80  lg:mt-2 rounded-xl "
                  />
                </div>
                <div className="flex flex-col lg:mt-[-250px] ">
                  <p className="lg:text-2xl  text-black pl-2 lg:p-4 lg:pb-4">
                    {d.flat}
                  </p>
                  <p className="lg:text-6xl font-bold text-green-600 pl-2 lg:pl-4 lg:w-1/4">
                    {d.off}
                  </p>
                  <p className="lg:text-xl text-sm font-bold pl-2 lg:pl-4">{d.order}</p>
                  <p className="border-black border-2 border-t-gray-400 border-t-4 rounded-xl bg-dealCode text-xs lg:text-xl w-fit px-1 py-1 lg:px-2 lg:py-2 m-2">
                    Use Code <span className="text-gray-500">{d.code}</span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Reservation section */}
      <div className={`bg-sky-950  h-fit w-full res`} >
        <div>
          <img src={Reservations} className="h-[600px] w-full" />
        </div>
        <div className="w-full h-full  lg:pl-28 lg:pt-11">
          <p className="lg:text-4xl ml-14 text-2xl font-extrabold text-yellow-400">Reservation</p>
          <p className="lg:text-3xl ml-6 text-lg font-semibold lg:font-bold py-4 px-2 tracking-widest text-white">
            BOOK A TABLE ONLINE
          </p>
          <div className="lg:flex justify-between lg:w-1/2 lg:pr-4">
            <div className="m-4">
              <input
                type="name"
                placeholder="Your name"
                className="lg:p-4 lg:pr-36 p-1 pr-16"
              />
            </div>
            <div className=" m-4">
              <input
                type="email"
                placeholder="Your Email "
                className="lg:p-4 lg:pr-44 p-1 pr-16"
              />
            </div>
          </div>
          <div className="lg:flex justify-between w-1/2 pr-4">
            <div className="m-4">
              <input
                type="date"
                placeholder="Date&Time"
                className="lg:p-4 lg:pr-48 pr-[118px] p-1"
              />
            </div>
            <div className=" m-4">
              <input
                type="people"
                placeholder="No. of people "
                className="lg:p-4 lg:pr-44 p-1 pr-16 "
              />
            </div>
          </div>
          <div className="m-4 mt-4 ">
            <input
              type="request"
              placeholder="Special Request"
              className="lg:pb-32 lg:p-4 pb-12 p-1 lg:pr-[545px] pr-16"
            />
          </div>
          <div className="lg:w-full">
            <button className="text-white ml-4 px-20  py-2 text-lg lg:text-3xl mb-4 lg:px-[295px]  bg-book-now lg:py-5 font-bold text-center  tracking-wider hover:bg-black  lg:m-4">
              Book Now
            </button>
          </div>
        </div>
      </div>
      {/* Subscribes section */}
      <div className="bg-cover bg-center bg-subs lg:h-[700px] h-[400px]  lg:w-full bg-[url(./assets/image/sub.jpeg)] ">
        <div className="bg-subs lg:h-[520px] h-64 mb-40  w-full">
          <div className="text-center lg:w-3/4 lg:pl-72 lg:p-6 ">
            <p className="lg:text-5xl text-sm pt-6 text-white font-sans font-semibold ">
              Motivation being our hard work
            </p>
            <Slider {...settings1} className="lg:flex ml-8 mr-8">
              {data1.map((d) => (
                <div className="bg-feedback lg:h-[200px] rounded-xl  mt-10  ">
                  <div className="text-white lg:text-xl text-xs lg:p-4 lg:mt-10 m-2">
                    <p>"{d.feedback}"</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:text-4xl  font-extrabold lg:pl-20 lg:pr-[980px] lg:mt-[160px]">
            <p className="text-white text-lg pl-10 pr-2 pt-10 ">
              Subscribe To Newsletter{" "}
              <span className="text-sub-color ">and Get -20% off</span>
            </p>
            <p className=" text-xs pl-10 text-white">
              9 Your Gateway to Serenity, Culinary Delights, and Unforgettable
              Moments.
            </p>
            <div className="flex bg-white rounded-xl lg:w-fit text-xs  mx-10 my-2">
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Enter the Email Address..."
                className="w-full border-none bg-transparent lg:pl-6 pl-2 py-1 lg:pr-20 lg:py-1 text-black text-xs  outline-none"
              />
              <button className="rounded-r-xl lg:pl-6  px-2 lg:pr-8 lg:py-2 text-white text-xs uppercase bg-sub-color ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Landingpage;
