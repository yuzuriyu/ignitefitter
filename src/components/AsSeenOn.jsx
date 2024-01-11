import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

export default function AsSeenOn() {
  return (
    <div className="w-full bg-black py-16">
      <p className="text-gray-200 text-center">AS SEEN ON</p>
      <div className="flex justify-between w-10/12 my-5 m-auto flex-col md:flex-row md:justify-center">
        <div className="flex justify-between">
          <img src={logo1} alt="" className="w-[175px]" />
          <img src={logo2} alt="" className="w-[175px]" />
        </div>
        <div className="flex justify-between">
          <img src={logo3} alt="" className="w-[175px]" />
          <img src={logo4} alt="" className="w-[175px]" />
        </div>
        <img src={logo5} alt="" className="w-[175px] m-auto md:m-0" />
      </div>
    </div>
  );
}
