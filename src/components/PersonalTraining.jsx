import React from "react";

export default function PersonalTraining() {
  return (
    <div>
      <div className="w-11/12 m-auto md:w-10/12 py-20 md:mt-0">
        <div className="pt-20 md:w-1/2">
          <h1 className="text-2xl mb-4">Personal Training</h1>
          <p>
            It’s our commitment to your health. We deliver effective, efficient
            workouts paired with nutritional guidance to help you reach your
            fitness peak.
          </p>
          <h1 className="text-2xl py-4">
            6-step success: Your fitness roadmap
          </h1>
          <p>
            We’ve developed a meticulously crafted, comprehensive six-step
            process that acts as your personal roadmap, guiding you steadily
            towards your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
          <div>
            <p className="font-bold">01.</p>
            <h1 className="text-lg font-bold">
              Personalised Fitness Assessment
            </h1>
            <p className="py-4">
              {` We begin with a comprehensive understanding of your history, goals, and lifestyle. This holistic approach, encompassing habits and nutrition, ensure a tailor-made fitness journey just for you.`}
            </p>
            <div className="flex">
              <div className="border-b border-black flex items-center">
                <p className="mr-2 font-bold">Fitness Assessment</p>
                <p className="font-bold">→</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">02.</p>
            <h1 className="text-lg font-bold">Basic Movement Assessments</h1>
            <p className="py-4">
              {`In our assessments, we prioritise perfecting your techniques to ensure safe, effective training. Through meticulous movement evaluations, we facilitate the correct form, fostering long-term health.`}
            </p>
            <div className="flex">
              <div className="border-b border-black flex items-center">
                <p className="mr-2 font-bold">Movement Assessments</p>
                <p className="font-bold">→</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">03.</p>
            <h1 className="text-lg font-bold">
              Precision Body Composition Scan
            </h1>
            <p className="py-4">
              {`Using the top-tier machine, we track your body. These regular, detailed scans become the guiding compass for our personalised fitness and nutrition strategies, continuously adapted to your body’s needs.`}
            </p>
            <div className="flex">
              <div className="border-b border-black flex items-center">
                <p className="mr-2 font-bold">Composition Scan</p>
                <p className="font-bold">→</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">04.</p>
            <h1 className="text-lg font-bold">Adaptable Fitness Assessments</h1>
            <p className="py-4">
              {`We cater to all levels, setting a baseline for tracking your progress. From beginners to advanced, our fitness assessments ensure visible, measurable improvements.`}
            </p>
            <div className="flex">
              <div className="border-b border-black flex items-center">
                <p className="mr-2 font-bold">Fitness Assessment</p>
                <p className="font-bold">→</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">05.</p>
            <h1 className="text-lg font-bold">
              Personalised Programs & Consistent Support
            </h1>
            <p className="py-4">
              {`With deep insight into your fitness profile, our coaches devise the perfect program for you. They offer unwavering support and drive you towards your goals.`}
            </p>
            <div className="flex">
              <div className="border-b border-black flex items-center">
                <p className="mr-2 font-bold">Programs & Support</p>
                <p className="font-bold">→</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">06.</p>
            <h1 className="text-lg font-bold">
              Personalised Nutrition Guidance
            </h1>
            <p className="py-4">
              {`Understanding your nutritional needs is vital for optimal health. We aim to help you discover the ideal nutrition plan for your unique needs and fitness goals for the future.`}
            </p>
            <div className="flex">
              <div className="border-b border-black flex items-center">
                <p className="mr-2 font-bold">Nutrition Guidance</p>
                <p className="font-bold">→</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
