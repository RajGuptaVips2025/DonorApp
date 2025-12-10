import React from "react";

const Introduction = () => {
  return (
    <section id="about" className="relative w-full h-[500px] md:h-[600px] mt-12 overflow-hidden bg-gray-50 font-sans">
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: "url(#custom-shape-clip)",
          }}
        >
          <img
            src="/Forest.jpg"
            alt="Fern Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-700/80" />
        </div>
      </div>

      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="md:col-span-7 flex flex-col justify-center relative">
          <div className="absolute -top-10 right-10 md:right-0 transform rotate-[-10deg] bg-white px-4 py-1 rounded-full shadow-lg z-30 hidden sm:block">
            <span className="text-green-700 font-bold text-sm md:text-base">
              25,460 Plants
            </span>
          </div>

          <div className="relative w-full">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white/20 uppercase tracking-tighter leading-none select-none">
              RESTORING
            </h1>

            <div className="relative flex items-center -mt-4 md:-mt-8 ml-2 z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Bundelkhand
              </h2>

              <div className="relative w-12 h-12 md:w-16 md:h-16 ml-4 shrink-0 opacity-90">
                <img
                  src="/Bundelkhand.png"
                  alt="Bundelkhand icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-8">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-white flex items-center justify-center transform -rotate-6 overflow-hidden">
              <img
                src="/Number1.png"
                alt="Number 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-6xl font-bold text-white/50 uppercase drop-shadow-sm">
                PLANT
              </span>
              <span className="text-xl md:text-3xl font-medium text-white">
                at a Time
              </span>
            </div>
          </div>

          <p className="text-white text-base md:text-xl mt-6 leading-relaxed opacity-95 max-w-2xl">
            A community-driven initiative to restore degraded land, empower rural
            families, and bring complete transparency to plantation and CSR
            projects.
          </p>

          <div className="mt-8">
            <a
              href="/donate"
              className="bg-white text-green-700 text-lg font-bold px-10 py-3 rounded-xl shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
            >
              Donate Now
            </a>
          </div>
        </div>

        <div className="hidden md:block md:col-span-5" />
      </div>

      <div className="absolute top-0 right-0 z-10 w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full rounded-tr-none border-b-[10px] border-l-[10px] border-green-500 overflow-hidden shadow-2xl pointer-events-none">
        <img
          src="/Woman Farmer.jpg"
          alt="Woman holding a plant"
          className="w-full h-full object-cover"
        />
      </div>

      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="custom-shape-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.6 L 0.1,1 Q 0,1 0,0.9 L 0,0 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Introduction;
