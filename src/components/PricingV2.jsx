import React from "react";

export default function PricingV2() {
  return (
    <div className="w-11/12 m-auto md:w-10/12 py-40">
      <h1 className="text-center text-4xl my-8 font-bold lg:w-1/2 m-auto">
        Pricing
      </h1>
      <p className="text-center lg:w-1/2 m-auto">
        At IgniteFitter, we believe in making fitness affordable. Enjoy
        high-value training experiences at incredibly competitive prices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
        <div>
          <div className="border py-8 px-8 border-black">
            <h1 className="text-xl font-bold mb-2">Starter Plan</h1>
            <p>
              {` Perfect for fitness newcomers, this plan eases you into the fitness world with personalised workouts, simple nutrition guidance, and a supportive community. Choose this for a gentle introduction to your fitness journey.`}
            </p>
            <p className="py-4">
              <span className="font-bold text-3xl">$160</span> per month
            </p>
            <button className="bg-black text-white py-2 rounded-full w-full hover:opacity-70">
              Get Started
            </button>
          </div>
          <div>
            <ul className="py-8 ml-4">
              <li className="pb-2">+ 2 training sessions per week</li>
              <li className="pb-2">+ Basic nutrition guidance</li>
              <li className="pb-2">+ Access to all group classes</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="border py-8 px-8 border-black">
            <h1 className="text-xl font-bold mb-2">Performance Plan</h1>
            <p>
              {`Ideal for those with some fitness background, this plan elevates your routine with personalised training, advanced nutrition advice, and progress tracking. Choose this to take your fitness to the next level.`}
            </p>
            <p className="py-4">
              <span className="font-bold text-3xl">$300</span> per month
            </p>
            <button className="bg-black text-white py-2 rounded-full w-full hover:opacity-70">
              Get Started
            </button>
          </div>
          <div>
            <ul className="py-8 ml-4">
              <li className="pb-2">+ 3 training sessions per week</li>
              <li className="pb-2">+ Tailored nutrition advice</li>
              <li className="pb-2">+ Access to all group classes</li>
              <li className="pb-2">+ Monthly body composition scans</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="border py-8 px-8 border-black">
            <h1 className="text-xl font-bold mb-2">Elite Plan</h1>
            <p>
              {`Tailored for serious fitness enthusiasts or athletes, this comprehensive plan optimises your performance with an intense training regimen, highly personalised nutrition strategies, and precise progress tracking.`}
            </p>
            <p className="py-4">
              <span className="font-bold text-3xl">$680</span> per month
            </p>
            <button className="bg-black text-white py-2 rounded-full w-full hover:opacity-70">
              Get Started
            </button>
          </div>
          <div>
            <ul className="py-8 ml-4">
              <li className="pb-2">+ 5 training sessions per week</li>
              <li className="pb-2">+ Personalised nutrition plans</li>
              <li className="pb-2">+ Priority booking for all group classes</li>
              <li className="pb-2">+ Bi-weekly body composition scans</li>
              <li className="pb-2">+ Ongoing performance assessments</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center md:w-1/2 m-auto">
        Not convinced? We offer a 100% money-back guarantee for all purchases.
        Try our product confidently; if you don’t like it, we’ll make it right.
      </p>
    </div>
  );
}
