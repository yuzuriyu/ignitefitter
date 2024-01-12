import React, { useState, useEffect } from "react";
import { testimonials } from "../testimonialData";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Set the duration here (in milliseconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [testimonials]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full m-auto flex bg-gray-100 py-20 relative">
      <div className="w-11/12 m-auto md:w-10/12 flex flex-col md:flex-row">
        <div className="mb-4 md:w-1/3">
          <p>WHAT PEOPLE SAY</p>
        </div>
        <div className="md:w-2/3 relative">
          {testimonials.map((data, index) => (
            <div
              key={index}
              className={index === currentIndex ? "visible" : "hidden"}
            >
              <p className="text-3xl mb-8">{data.statement}</p>
              <div className="flex">
                <img
                  src={data.photoURL}
                  alt=""
                  className="w-14 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{data.name}</p>
                  <p>{data.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-20 bottom-32">
        <button
          onClick={handleNext}
          className="absolute top-1/2 left-4 text-lg cursor-pointer"
        >
          →
        </button>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 right-4 text-lg cursor-pointer"
        >
          ←
        </button>
      </div>
    </div>
  );
}
