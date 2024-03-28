import React from "react";
import Data from "../../Data/Data.json";

const Blog = () => {
  return (
    <div className="h-fit pb-40 bg-menu1">
      <div className="relative top-24 p-1 m-1">
        <div>
          {Data.map((x) => {
            console.log(x);
            return (
              <div key={x.id}>
                <div className="border-b border-amber-700" >
                  <img
                    src={x.img}
                    key={x.id}
                    className="h-96 w-full px-72 my-16  " id="round"
                  />
                  <div
                    className="pl-80 font-bold text-sunset text-4xl "
                    id="para"
                  >
                    SUNSET
                  </div>
                  <div className="pl-[62%] text-3xl text-slate-200" id="para1">
                    OUR VISION
                    <p className="text-lg w-72 text-visioncolor" id="con">
                      {x.visiontext}
                    </p>
                  </div>
                </div>
                <div className="text-center text-latestheading text-3xl font-semibold py-4 border-b border-amber-700" >
                  {x.carouselheading}
                </div>
                <div className="text-center text-latestheading text-3xl font-semibold py-4 border-b border-amber-700">
                {x.reviewheading}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
