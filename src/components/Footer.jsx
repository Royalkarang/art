import React from "react";
import { RiFacebookFill, RiTwitterXLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className="pb-20">
      <Image src={logo} width={30} height={30} alt="logo" className="ml-[10px]"/>
      <div className="lg:flex  lg:text-3xl text-xl py-3 items-center justify-between">
        <div className="text-sm">
          <h1 className="text-lg pb-2">ARCHANA GALLERY</h1>
          <div className="text-[#757575] leading-5 flex gap-10">
          <div className="flex flex-col gap-1 text-black w-full"> 
            <div className="flex">
              <span className="font-semibold w-14">Location:</span> 
              <span className="pl-5">Sea Breeze, Zephyr Point, Damansara Heights, KL 50490 Malaysia</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-14">Email:</span> 
              <span className="pl-5"><a href="mailto:archanagallery@gmail.com">archanagallery@gmail.com</a></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-14">Contact:</span> 
              <span className="pl-5">+60123009788</span>
            </div>
          </div>

            {/* <div className="flex flex-col gap-1 text-slate"> 
              <span> Sea Breeze, Zephyr Point, Damansara Heights, KL 50490 Malaysia </span>
              <span><a href="mailto:archanagallery@gmail.com">archanagallery@gmail.com</a></span>
              <span> +60123009788 </span>
            </div>
            */}
          </div>
        </div>
        <div className="flex gap-1 text-[30px] pt-5 justify-center">
          <RiFacebookFill className="bg-black rounded-full text-white p-[7px] " />
          <AiOutlineInstagram className="bg-black rounded-full text-white p-[7px]" />
          <RiTwitterXLine className="bg-black rounded-full text-white p-[7px]" />
          <IoIosMail className="bg-black rounded-full text-white p-[7px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
