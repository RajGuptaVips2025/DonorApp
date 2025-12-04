'use client';

import Image from 'next/image';

const Change = () => {
  return (
    <section className="relative py-16 md:py-24 font-sans text-white overflow-hidden bg-[#2e9e5b]">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
            src="/Forest.jpg"
            alt="Forest background texture"
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-green-700/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 drop-shadow-md">
            Before & After
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Real Impact In Bundelkhand
          </h2>
          <p className="text-green-50 text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
            Transparent, traceable, and measurable impact for every contribution.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mb-8 md:mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
          <div className="relative h-[300px] md:h-[500px] w-full flex">
            <div className="relative w-1/2 h-full border-r-2 border-white">
               <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/30">
                  <span className="font-bold text-white uppercase tracking-wider text-sm md:text-base drop-shadow-md">Before</span>
               </div>
               
               <Image
                  src="/Change2.png" 
                  alt="Bundelkhand land before restoration"
                  fill
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" /> 
            </div>

            <div className="relative w-1/2 h-full border-l-2 border-white">
               <div className="absolute bottom-4 right-4 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/30">
                  <span className="font-bold text-white uppercase tracking-wider text-sm md:text-base drop-shadow-md">After</span>
               </div>

               <Image
                  src="/Change1.png" 
                  alt="Bundelkhand land after restoration"
                  fill
                  className="object-cover"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-green-600 border-b-[6px] border-b-transparent"></div>
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-green-600 border-b-[6px] border-b-transparent"></div>
                </div>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-md">
            Be Part Of This Change — Adopt A Plant
          </h2>
          <p className="text-green-50 text-base md:text-lg drop-shadow-sm">
            1,200+ native plants, soil moisture improved, fodder availability growing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Change;