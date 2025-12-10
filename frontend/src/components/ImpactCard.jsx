import React, { useEffect, useRef, useState } from "react";
import useCountUp from "./useCountUp";

const ImpactCard = ({ number, label, iconSrc, iconAlt }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animatedNum = useCountUp(start ? number : 0);

  return (
    <div
      ref={ref}
      className="bg-green-50 rounded-[2.5rem] shadow-sm p-8 flex flex-col items-center text-center w-full h-full justify-center"
    >
      <span className="text-4xl font-bold text-[#2e9e5b] mb-4">
        {animatedNum.toLocaleString()}
        {number.includes("+") ? "+" : ""}
      </span>

      <div className="w-20 h-20 mb-4">
        <img src={iconSrc} alt={iconAlt} className="w-full h-full object-contain" />
      </div>

      <p className="text-gray-800 font-medium text-xl">{label}</p>
    </div>
  );
};

export default ImpactCard;
