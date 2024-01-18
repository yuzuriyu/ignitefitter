import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <div className="w-full bg-black py-20">
      <div className="w-11/12 m-auto md:w-10/12 flex flex-col md:flex-row gap-10">
        <div className=" md:w-1/2">
          <p className="text-white text-2xl mb-2">IgniteFitter</p>
          <p className="text-white">Personal fitness training service</p>
          <p className="text-white my-4">
            Unlock your potential and redefine your limits with us. Our trainers
            tailor workouts to your ability, ensuring you’re fit today and
            undeniably stronger tomorrow. It’s our commitment to your health. We
            deliver effective, efficient workouts paired with nutritional
            guidance to help you reach your fitness peak.
          </p>
        </div>
        <div className=" md:w-1/2">
          <p className="text-white text-2xl">Get updated</p>
          <p className="text-white my-4">
            Stay ahead in your fitness journey with our exclusive tips and
            offers.
          </p>
          <div className="flex items-center pb-4">
            <img src={facebook} alt="" className="w-6 mr-2 cursor-pointer" />
            <img src={instagram} alt="" className="w-6 mr-2 cursor-pointer" />
            <img src={twitter} alt="" className="w-6 cursor-pointer" />
          </div>
          <div className="flex items-center rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Type your email"
              className="py-2 px-4 focus:outline-none"
            />
            <button className="bg-yellow-300 rounded-tr-full rounded-br-full py-2 px-4 hover:bg-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
