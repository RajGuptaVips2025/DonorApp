import Image from "next/image";

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  title: string;
}

const Hero = ({ imageSrc, imageAlt, subtitle, title }: HeroProps) => {
  return (
    <header className="relative w-full h-[80vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
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