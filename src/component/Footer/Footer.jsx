import React from "react";
// import Facebook from '../assets/image/FacebookLogo.png';
import Facebook from '../../assets/image/FacebookLogo.png'
import Instagram from '../../assets/image/Insta.png';
import Whatsapp from '../../assets/image/WhatsApp.png';
import Twitter from '../../assets/image/Twitter.png';

const Footer = () => {
  return (
    <div className="bg-sub-color w-full">
      <div className="flex">
        <div className="text-3xl font-bold flex flex-col p-1 m-6">
          Address
          <div className="text-xl pl-2">
            <p>Cafe</p>
            <p>Plot No.45, Street No.14</p>
            <p>Marol MIDC Industry</p>
            <p>Estate</p>
            <p>Andheri</p>
            <p>East,Mumbai-400093</p>
          </div>
        </div>
        <div className="text-3xl font-bold flex flex-col p-1 my-6 ml-40 mr-32">
            Help & Info
          <div className="text-xl pl-2">
            <p>About Cafe</p>
            <p>Careers</p>
            <p>FAQs</p>
          </div>  
        </div>
        <div className="text-3xl font-bold flex flex-col p-1 my-6 ml-32 mr-8">
            Contact Us
          <div className="text-xl pl-2">
            <p>1809-908-5647</p>
            <p>Get in Touch</p>
            <p>Cgat With Us</p>
          </div> 
        </div>
        <div className="text-3xl font-bold flex flex-col p-1 my-6 ml-60 mr-2"> Useful Links
          <div className="text-xl pl-2">
            <p>Privacy policy</p>
            <p>Terms of Service</p>
            <p>Payment Issues</p>
            <p>Net Banking</p>
            <p>Custom Order</p>
          </div> 
        </div>
      </div>
      <div className="text-3xl font-bold flex justify-center p-2">Follow Us on :
      <img src={Facebook}  className=" w-10 h-10 mx-2"/>
      <img src={Instagram} className=" w-10 h-10 mx-2"/>
      <img src={Whatsapp} className=" w-10 h-10 mx-2"/>
      <img src={Twitter} className=" w-10 h-10 mx-2"/>
      </div>
      <div className="bg-black text-xl text-white font-bold flex justify-center p-8">@2023 Railworld India. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
