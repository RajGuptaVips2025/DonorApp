import React from "react";

const Mission = () => {
  return (
    <section id="bundelkhand" className="relative py-16 font-sans text-white overflow-hidden bg-gray-900">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/Forest.jpg"
          alt="Forest background texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-green-400 rounded-[2.5rem] z-0 shadow-lg" />

            <div className="absolute bottom-0 right-0 w-[90%] h-[90%] bg-gradient-to-b from-white to-green-500 rounded-[2.5rem] z-10 shadow-2xl overflow-hidden p-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src="/Bundelkhand.png"
                  alt="Map of Bundelkhand with green cover"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 drop-shadow-md">
            Our Mission
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 drop-shadow-sm">
            We are restoring degraded lands across Bundelkhand through native
            plantations, water conservation, and community-led rural
            employment. With support from CSR partners and individual donors,
            we are building a greener and more self-reliant Bundelkhand.
          </p>

          <ul className="space-y-6">
            <li className="flex flex-col">
              <h3 className="text-xl font-bold mb-2 flex items-center drop-shadow-sm">
                <span className="mr-2 text-green-400">•</span> Environment
                Restoration :
              </h3>
              <p className="text-gray-300 text-base pl-6">
                Rebuilding degraded landscapes with native, drought-resistant
                species.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="text-xl font-bold mb-2 flex items-center drop-shadow-sm">
                <span className="mr-2 text-green-400">•</span> Rural
                Empowerment
              </h3>
              <p className="text-gray-300 text-base pl-6">
                Creating employment for local communities through plantation,
                maintenance, and eco-product development.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="text-xl font-bold mb-2 flex items-center drop-shadow-sm">
                <span className="mr-2 text-green-400">•</span> Water
                Conservation
              </h3>
              <p className="text-gray-300 text-base pl-6">
                Improving soil moisture and groundwater recharge through
                nature-based solutions.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="text-xl font-bold mb-2 flex items-center drop-shadow-sm">
                <span className="mr-2 text-green-400">•</span> Transparent
                Impact
              </h3>
              <p className="text-gray-300 text-base pl-6">
                Every plant is geo-tagged, monitored, and digitally tracked for
                donors and CSR partners.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
