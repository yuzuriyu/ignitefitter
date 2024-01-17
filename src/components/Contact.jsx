import React from "react";

export default function Contact() {
  return (
    <div className="py-40 w-11/12 m-auto md:w-10/12">
      <h1 className="text-2xl mb-2 font-bold">Contact</h1>
      <p className="mb-4">
        Contact us today to secure a space on our next programme.
      </p>
      <div className="md:w-2/3 lg:w-1/2">
        <div className="py-4 flex flex-col">
          <p className="font-bold">
            Name
            <span className="text-gray-500 text-sm font-normal">{` (required)`}</span>
          </p>
          <input type="text" className="border py-2 px-4 flex-1" />
        </div>
        <div className="pb-4 flex flex-col">
          <p className="font-bold">
            Email
            <span className="text-gray-500 text-sm font-normal">{` (required)`}</span>
          </p>
          <input type="text" className="border py-2 px-4 flex-1" />
        </div>
        <div className="pb-4 flex flex-col">
          <p className="font-bold">
            Phone
            <span className="text-gray-500 text-sm font-normal">{` (required)`}</span>
          </p>
          <input type="text" className="border py-2 px-4 flex-1" />
        </div>
        <div className="pb-4 py-4 flex flex-col">
          <select className="border py-4 px-4">
            <option>Select a Plan</option>
            <option>{`Starter Plan ($160/m)`}</option>
            <option>{`Performance Plan ($300/m)`}</option>
            <option>{`Elite Plan ($680/m)`}</option>
          </select>
        </div>
        <div className="mb-4 flex flex-col">
          <p className="font-bold">Message</p>
          <textarea className="border flex-1"></textarea>
        </div>
        <button className="rounded-full bg-black  text-white py-2 mt-4 px-14">
          Register
        </button>
      </div>
    </div>
  );
}
