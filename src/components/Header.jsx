import React from "react";
import logo from "../assets/logo--dark.png";
import menu from "../assets/menu--dark.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="absolute top-8 w-11/12 md:w-10/12 left-1/2 -translate-x-1/2 flex justify-between">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="hidden md:block">
        <div className="flex">
          <Link to={"/"}>
            <div className=" mr-7 relative group">
              Home
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/personal-training"}>
            <div className=" mr-7 relative group">
              Personal Training
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/pricing"}>
            <div className=" mr-7 relative group">
              Pricing
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/blog"}>
            <div className=" mr-7 relative group">
              Blog
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className="relative group">
              Contact
              <div className="absolute w-0 group-hover:w-full border-b border-black transition-all ease-in-out duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
      <img src={menu} alt="" className="w-7 md:hidden" />
    </div>
  );
}
