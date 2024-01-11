import React from "react";
import logo from "../assets/logo--dark.png";
import menu from "../assets/menu--dark.png";

export default function Header() {
  return (
    <div className="absolute top-8 w-11/12 md:w-10/12 left-1/2 -translate-x-1/2 flex justify-between">
      <img src={logo} alt="" className="w-[200px]" />
      <div className="hidden md:block">
        <div className="flex">
          <div className=" mr-7 relative group">
            Home
            <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
          </div>
          <div className=" mr-7 relative group">
            Personal Training
            <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
          </div>
          <div className=" mr-7 relative group">
            Pricing
            <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
          </div>
          <div className=" mr-7 relative group">
            Blog
            <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
          </div>
          <div className="relative group">
            Contact
            <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
          </div>
        </div>
      </div>
      <img src={menu} alt="" className="w-7 md:hidden" />
    </div>
  );
}
