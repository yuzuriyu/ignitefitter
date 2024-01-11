import React from "react";
import wallpaper from "../assets/genos.jpg";

export default function Hero() {
  return (
    <div className="w-11/12 md:w-10/12 m-auto h-screen flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 h-full items-center align-middle flex mt-36 md:mt-0">
        <div>
          <h1 className="text-5xl font-bold">Fit Today, Hero Tomorrow</h1>
          <p className="mt-8 mb-10 text-lg ">
            Unleash your potential and redefine your limits with us. Our
            trainers customize workouts to your ability, ensuring you’re as
            unbeatable as Saitama!
          </p>
          <button className="bg-yellow-400 text-white rounded-lg px-12 py-4">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 h-full">
        <img
          src={wallpaper}
          alt=""
          className="md:h-full h-[500px] w-full object-cover"
        />
      </div>
    </div>
  );
}
