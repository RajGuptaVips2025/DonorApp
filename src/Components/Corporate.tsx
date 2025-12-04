'use client';

import Image from 'next/image';

const corporatePartners = [
  { id: 1, logoSrc: "/Corporate1.png", logoAlt: "Chirag Connect Logo", title: "Chirag Connect" },
  { id: 2, logoSrc: "/Corporate2.png", logoAlt: "Apna Khaata Logo", title: "Apna Khaata" },
  { id: 3, logoSrc: "/Corporate4.png", logoAlt: "Chirag Connect Logo", title: "Chirag Connect ." },
  { id: 4, logoSrc: "/Corporate3.png", logoAlt: "Apna Health Khata Logo", title: "Apna Health Khata" },
  { id: 5, logoSrc: "/Corporate5.png", logoAlt: "Chirag Connect Logo", title: "Chirag Connect ." },
];

const CorporateCard = ({ logoSrc, logoAlt, title }: { logoSrc: string; logoAlt: string; title: string }) => (
  <div className="bg-white border-2 border-green-500 rounded-2xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow h-full w-full">
    <div className="relative w-50 h-50 mb-4 flex items-center justify-center">
      <Image src={logoSrc} alt={logoAlt} fill className="object-contain" />
    </div>
    <h3 className="text-green-700 font-bold text-xl text-center">{title}</h3>
  </div>
);

const Corporate = () => {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden font-sans">
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            clipPath: 'url(#simple-semicircle-clip)',
            filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))'
          }}
        >
          <Image
            src="/Forest.jpg"
            alt="Forest Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-green-700/70" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white h-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md mt-4">
          For Corporates: Verified Impact You Can Trust
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
          We offer complete visibility with geo-tagging, carbon tracking, survival reports, and impact dashboards tailored for CSR compliance
        </p>

        <div className="relative w-full mb-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {corporatePartners.map((partner, index) => (
                    <div key={`p1-${index}`} className="mx-4 w-[280px] md:w-[320px] shrink-0 h-[220px]">
                        <CorporateCard 
                            logoSrc={partner.logoSrc} 
                            logoAlt={partner.logoAlt} 
                            title={partner.title} 
                        />
                    </div>
                ))}

                {corporatePartners.map((partner, index) => (
                    <div key={`p2-${index}`} className="mx-4 w-[280px] md:w-[320px] shrink-0 h-[220px]">
                        <CorporateCard 
                            logoSrc={partner.logoSrc} 
                            logoAlt={partner.logoAlt} 
                            title={partner.title} 
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-center lg:justify-end mb-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg flex items-center transition-all transform hover:scale-105">
            Start Your CSR Partnership <span className="ml-3 text-2xl">→</span> Join with Us
          </button>
        </div>
      </div>

      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="simple-semicircle-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 Q 0.5,1 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <style jsx global>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Corporate;





