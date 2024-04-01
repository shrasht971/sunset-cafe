import React, { useState, useEffect } from "react";
import Data from "../Data/Data.json";
import Carousel from '../Data/Carousel.json';
import axios from "axios";

const Blog = () => {
  const [carousel, setCarousel] = useState([]);
  
  // useEffect(() => {
  //   // Fetch data or perform side effect here to set carousel state
  //  setCarousel(Data);
    let getdata=async()=>{
       // Fetch data or perform side effect here to set carousel state
    let url ="http://localhost:5023/api/data";
    let result=await fetch(url,{method:'GET'})
    let data= await result.json();

   setCarousel(data.dataa);

    }
    useEffect(()=>{
      getdata();
    },[])

  // }, []);
  // console.log(carousel.id);

  return ( 
    
    <div className="h-fit pb-40 bg-menu1">
      <div className="relative top-24 p-1 m-1">
        {carousel.map((x) => (
          <div key={x.id}>
            <div className="border-b border-amber-700">
            
            <ul>
              {
                carousel.map((item)=>{
                  <li key={item.id}>{item.blog}</li>
                })
              }
            </ul>
            <h1>sahsidhakdkdkhdh</h1>

              <img
                src={x.img}
                key={x.id}
                className="lg:h-96 sm:h-60 w-full lg:px-72 lg:my-16 sm:my-6"
                id="round"
                alt="carousel-image"
              />
              <div className="lg:pl-80 font-bold text-sunset sm:text-2xl lg:text-4xl" id="para">
                SUNSET
              </div>
              <div className="lg:pl-[62%] sm:pl-[50%] sm:mt-[-10%] lg:text-3xl sm:text-xl text-slate-200" id="para1">
                OUR VISION
                <p className="lg:text-lg sm:text-xs lg:w-72 sm:w-52 text-visioncolor" id="con">
                  {x.visiontext}
                </p>
              </div>
            </div>
            <div className="text-center text-latestheading lg:text-3xl font-semibold py-4 border-b border-amber-700">
              {x.carouselheading}
              <div className="carousel">
                {carousel.carousel1 &&
                  carousel.carousel1.map((item) => (
                    <div key={item.id}>
                      <img src={item.image} alt={item.caption} />
                      <p>{item.caption}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="text-center text-latestheading lg:text-3xl font-semibold py-4 border-b border-amber-700">
              {x.reviewheading}
              <div className="carousel">
                {carousel.carousel2 &&
                  carousel.carousel2.map((item) => (
                    <div key={item.id}>
                      <img src={item.image} alt={item.caption} />
                      <p>{item.caption}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="text-center text-white lg:text-3xl font-semibold py-3">
              {x.share}
              <p className="lg:text-lg font-normal pt-2 ic">{x.content1}</p>
              <p className="lg:text-lg text-xs font-normal pt-2 ">{x.content2}</p>
              <p className="text-menu1 bg-slate-300 mb-4 lg:text-sm sm:text-xs py-3 my-2 lg:mx-80 sm:pl-20 lg:pl-80 flex">{x.reviewcontent}
                <div className="text-white lg:ml-72 sm:ml-28 lg:pl-4 sm:pl-1 sm:w-14 lg:w-20 flex  bg-menu-bgcolor">
                  <button>submit</button>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
