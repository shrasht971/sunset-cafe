import React from 'react'
import Facebook from '../../assets/image/FacebookLogo.png'
import Instagram from '../../assets/image/Insta.png';
import Whatsapp from '../../assets/image/WhatsApp.png';
import Twitter from '../../assets/image/Twitter.png';

const ResFooter = () => {
  return (
    <div>
    <div className='flex justify-evenly mb-4 '>
    <div className='w-1/2 font-semibold'>
     <p className='text-lg text-red-500 pt-4 pb-2'>Address</p>
     <p className='text-xs '>Cafe Plot No. 45, Street No.14 Marol MIDC Industry Estate, Andheri East,Mumbai-400093</p>
    </div>
    <div classs=''>
      <p className='text-sm font-semibold  border-b border-red-600 mt-8'>About us</p>
      <p className='text-sm font-semibold border-b border-red-600 '>Terms of use</p>
      <p className='text-sm font-semibold border-b border-red-600 '>Services</p>
      <p className='text-sm font-semibold border-b border-red-600 '>Policies</p>  
    </div>
    </div>
    <div className="text-sm flex pb-4 pl-8 text-red-600  ">Follow Us on :
      <img src={Facebook}  className=" w-4 h-4 mx-2"/>
      <img src={Instagram} className=" w-4 h-4 mx-2"/>
      <img src={Whatsapp} className=" w-4 h-4 mx-2"/>
      <img src={Twitter} className=" w-4 h-4 mx-2"/>
      </div>
      <div className="bg-black text-xs text-white font-semibold flex justify-center py-4">@2023 Railworld India. All Rights Reserved</div>
      </div>
  )
}

export default ResFooter
