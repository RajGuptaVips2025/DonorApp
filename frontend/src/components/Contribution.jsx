import React from "react";

const contributionSteps = [
  {
    id: 1,
    title: "You Donate",
    description: "Choose the number of plants you want to support.",
  },
  {
    id: 2,
    title: "We Plant with Local Communities",
    description:
      "Our team plants native, drought-resistant species across Bundelkhand.",
  },
  {
    id: 3,
    title: "You Receive Geo-Tagged Updates Every 6 Months",
    description: "See exactly where and how your plants are growing.",
  },
  {
    id: 4,
    title: "Track Carbon Sequestration in Your Dashboard",
    description: "Watch your environmental impact grow over time.",
  },
];

const Contribution = () => {
  return (
    <section id="contact" className="py-16 bg-[#F0F7F0] font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] lg:h-[500px] flex justify-center items-center">
            <img
              src="/Contribution.png"
              alt="Earth growing inside a glass bowl"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How Your Contribution Creates Impact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Plant, Track, and Celebrate your contribution to Bundelkhand's
                restoration.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {contributionSteps.map((step) => (
                <div key={step.id} className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
                    {step.id}
                  </div>

                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-start lg:justify-end">
              <a href="/donate">
                <button className="bg-green-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
                  Adopt a Plant
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
