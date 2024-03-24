import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/image/slider1.jpg";
import Slider2 from "../../assets/image/slider2.jpg";
import Slider3 from "../../assets/image/slider3.jpg";

const PreviousLanding = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const data = [
        {
         img:Slider1,
         recipes:'Chai Infusion Dessert: Cardamom Chai Panna Cotta',
         content:'Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.',
        },
        {
         img:Slider2,
         recipes:'Sizzling Tandoori Platter: A Feast for the Senses',
         content:'Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney',
        },
        {
            img:Slider3,
            recipes:'Mango Curry Chicken',
            content:'Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.',
           },
           {
            img:Slider1,
            recipes:'Chai Infusion Dessert: Cardamom Chai Panna Cotta',
            content:'Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.',
           },
           {
            img:Slider2,
            recipes:'Sizzling Tandoori Platter: A Feast for the Senses',
         content:'Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney',
           },
           {
            img:Slider3,
            recipes:'Mango Curry Chicken',
            content:'Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.',
           },
    ]
  return (
    <>
     <div className='lg:flex  flex-row w-full align-middle h-fit '>
     {/* wel left */}
     <div className='lg:flex flex-col  justify-center sm:px-2 lg:items-start lg:w-2/4 mt-16 ' >
      <h1 className=' text-welcome font-bold text-sx pl-24 lg:text-2xl lg:p-11 pt-20 '>Welcome</h1>
      <p className='text-white font-display pl-2 text-sm lg:text-3xl lg:pb-20 lg:pl-4 lg:pr-20 '>Discover Culinary Elegance at Café Sunset: Where Every Sip and Bite Unveils a Symphony of Flavors and Moments.</p>
      <p className='text-welcome text-sm pl-2 lg:text-xl lg:pl-8 lg:pr-[30vw] lg:pb-5'>Gateway to Serenity, Culinary Delights,</p>
      <p className='text-white font-display pl-2 text-sm lg:text-base lg:pl-8'>Step into a World Where Ambiance, Flavor, and<br/> Warmth Converge—A Haven Where Every Visit<br/> Feels Like Coming Home.</p>
      <button className='text-white text-sm lg:text-2xl rounded-sm border-2 border-white  lg:w-48 lg:h-18 bg-transparent lg:py-2 ml-2 px-2 text-center  tracking-wider hover:bg-black lg:mt-20 lg:ml-8'>Order Now</button>
    </div>
    {/* wel right */}
    <div className="lg:flex w-full flex xs:mx-6 sm:mx-9 lg:w-2/4">
     <div className="slider-container w-[300px] lg:w-[750px]  lg:mt-24 p-6">
     <div className="border-white border-b-2 p-1 mb-1 w-fit text-white flex  justify-center">We Are Known for:-</div>
      <Slider {...settings} className="">
       {data.map((d) => (
       <div key={d.recipes} className="bg-white h-[302px] lg:h-[450px]  rounded-xl">
        <div className="">
            <img src={d.img} alt="" className=" h-32 lg:h-44 w-full rounded-xl "/>
        </div>
        <div className="lg:flex flex-col flex p-2">
            <p className="text-sm lg:text-lg font-bold  text-welcome font-sans">{d.recipes}</p>
            <p className="text-black text-xs lg:text-sm font-sans">{d.content}</p>
        </div>
       </div>
       ))}
      </Slider>
    </div>
    </div>
     </div> 
    </>
  )
}

export default PreviousLanding
