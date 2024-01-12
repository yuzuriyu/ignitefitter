import React from "react";
import banner from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src={banner}
        alt=""
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-11/12 md:w-10/12 left-1/2 -translate-x-1/2">
        <h1 className="text-white text-4xl">
          Ready to ignite your fitness revolution?
        </h1>
        <p className="text-white text-lg pb-4 pt-2">
          There has never been a better time than right now. Dive into your
          fitness journey with StartFitter today.
        </p>
        <button className="bg-white py-2 px-10 rounded-full">
          Get started
        </button>
      </div>
    </div>
  );
}
