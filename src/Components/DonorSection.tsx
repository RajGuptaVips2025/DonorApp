'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/Components/ui/card"; 
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

interface DonorSectionProps {
  backgroundImage?: string;
}

const DonorSection = ({ backgroundImage = "/Forest.jpg" }: DonorSectionProps) => {
  const [frequency, setFrequency] = useState("One Time");
  const [impact, setImpact] = useState("Adopt 5 Trees");

  return (
    <>
      <section className="max-w-[1340px] mx-auto px-6 mb-6 z-30 relative pt-10">
        <h3 className="text-lg font-medium text-gray-700">MAKE A DIFFERENCE</h3>
        <h2 className="text-3xl font-extrabold text-black">DONATE TODAY</h2>
      </section>

      <div className="relative w-full pb-10">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative w-full h-full overflow-hidden rounded-t-[480px]">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-green-500" style={{ opacity: 0.22, mixBlendMode: "multiply" }} />
          </div>
        </div>

        <section className="relative z-30 max-w-[1340px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 items-stretch">
            <Card className="bg-[#f0fdf4] border-green-100 min-h-[560px] flex flex-col md:w-1/2 w-full shadow-lg rounded-2xl">
              <CardContent className="p-6 sm:p-8 flex flex-col gap-5 flex-1 font-sans">
                <div>
                  <Label className="text-gray-700 font-semibold mb-2 block">I would like to Give...</Label>
                  <div className="flex gap-3">
                    {["One Time", "weekly", "Monthly"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setFrequency(item)}
                        className={`flex-1 py-2 px-2 rounded-lg text-sm font-medium border transition-colors ${
                          frequency === item
                            ? "bg-green-600 text-white border-green-600 shadow-md"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-gray-700 font-semibold mb-2 block">Select Your Impact</Label>
                  <div className="flex gap-3">
                    {["Adopt 5 Trees", "Adopt 10 Trees", "Other"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setImpact(item)}
                        className={`flex-1 py-2 px-2 rounded-lg text-sm font-medium border transition-colors ${
                          impact === item
                            ? "bg-green-600 text-white border-green-600 shadow-md"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700 font-semibold mb-2 block">Amount</Label>
                  <Input 
                    placeholder="Enter the Amount" 
                    className="bg-white border-gray-200 h-12 text-lg font-medium" 
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-semibold mb-2 block">UPI • Credit/Debit Card</Label>
                  <Input 
                    placeholder="Enter the UPI ID" 
                    className="bg-white border-gray-200 h-12 text-gray-600" 
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-semibold mb-2 block">Donating on the Name of</Label>
                  <Input 
                    placeholder="Enter Donor" 
                    className="bg-white border-gray-200 h-12" 
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-semibold mb-2 block">Any Message</Label>
                  <Input 
                    placeholder="Type here............" 
                    className="bg-white border-gray-200 h-12" 
                  />
                </div>

                <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-md text-lg shadow-lg">
                  Denote
                </Button>

              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white border-green-500 min-h-[560px] flex flex-col md:w-1/2 w-full shadow-lg rounded-2xl">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-extrabold text-center mb-1">THE WORLD NEEDS MORE TREES</h3>
                <h4 className="text-sm font-semibold mb-6 text-center text-green-100 opacity-90 tracking-widest">WHY TREES MATTER</h4>
                
                <p className="text-base text-center text-green-50 mb-8 leading-relaxed">
                  Trees are not just plants. They are the foundation of life on Earth. They provide:
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                       <Image src="/img1.png" alt="img1" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">CLEAN AIR</h5>
                    <p className="text-sm text-green-100">Trees absorb pollutants and release oxygen.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                       <Image src="/img2.png" alt="img2" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">STRONGER COMMUNITIES</h5>
                    <p className="text-sm text-green-100">Tree planting creates jobs & restores soil.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                       <Image src="/img3.png" alt="img3" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">HABITAT FOR WILDLIFE</h5>
                    <p className="text-sm text-green-100">Forests preserve ecosystems.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
                       <Image src="/img4.png" alt="img4" width={36} height={36} className="object-contain" />
                    </div>
                    <h5 className="font-bold text-base">CLIMATE PROTECTION</h5>
                    <p className="text-sm text-green-100">Trees reduce heat & capture carbon.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>
      </div>
    </>
  );
};

export default DonorSection;