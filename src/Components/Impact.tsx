'use client';

import React from 'react';
import Image from 'next/image';

interface ImpactCardProps {
  number: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ number, label, iconSrc, iconAlt }) => (
  <div className="bg-green-50 rounded-[2.5rem] shadow-sm p-8 flex flex-col items-center text-center w-full h-full justify-center">
    <span className="text-4xl font-bold text-[#2e9e5b] mb-4">
      {number}
    </span>
    <div className="relative w-20 h-20 mb-4">
      <Image src={iconSrc} alt={iconAlt} fill className="object-contain" />
    </div>
    <p className="text-gray-800 font-medium text-xl">{label}</p>
  </div>
);

const Impact = () => {
  return (
    <section className="relative py-20 font-sans text-white overflow-hidden bg-[#2e9e5b]">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
            src="/Forest.jpg" 
            alt="Forest background texture"
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-green-700/70 " />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-sm">
            Our Impact In Bundelkhand
          </h2>
          <p className="text-green-50 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
            Every donation contributes to real, measurable progress on the ground
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
            <ImpactCard
              number="56,230"
              label="Plants Planted"
              iconSrc="/Mission1.png" 
              iconAlt="Hand holding a plant"
            />
            <ImpactCard
              number="12,850"
              label="Lives Impacted"
              iconSrc="/Mission2.png" 
              iconAlt="Group of people"
            />
            <ImpactCard
              number="42+"
              label="Villages Covered"
              iconSrc="/Mission3.png" 
              iconAlt="Map with location pin"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mt-2">
            <ImpactCard
              number="56,230"
              label="Carbon Sequestered"
              iconSrc="/Mission4.png" 
              iconAlt="Carbon footprint icon"
            />
            <ImpactCard
              number="56,230"
              label="Women Employed"
              iconSrc="/Mission5.png" 
              iconAlt="Woman avatar"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Impact;