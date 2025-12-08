import React from "react";

const Hero = ({ imageSrc, imageAlt, subtitle, title }) => {
  return (
    <header className="relative w-full h-[80vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-green-900/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wider">
          {subtitle}
        </h2>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mt-4">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Hero;
