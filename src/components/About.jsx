import React from "react";

export default function About() {
  return (
    <div className="w-11/12 m-auto md:w-10/12 py-20 mt-80 md:mt-0">
      <p className="text-center">About Us</p>
      <h1 className="text-center text-4xl my-8 font-bold lg:w-1/2 m-auto">
        Why choose IgniteFitter? Discover our unique edge
      </h1>
      <p className="text-center lg:w-1/2 m-auto">
        It’s our commitment to your health. We deliver effective, efficient
        workouts paired with nutritional guidance to help you reach your fitness
        peak.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
        <div>
          <h1 className="text-lg font-bold mb-2">Personalised Workouts</h1>
          <p>
            {` IgniteFitter's Expert Coaches are certified fitness pros dedicated to
            guiding you towards your health goals.`}
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">Cutting-edge Facilities</h1>
          <p>
            Our state-of-the-art facilities are designed to enhance your workout
            experience and fuel your progress.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">Supportive Community</h1>
          <p>
            {` You’ll train alongside like-minded people who encourage and inspire
            each other towards their fitness goals.`}
          </p>
        </div>
      </div>
    </div>
  );
}
