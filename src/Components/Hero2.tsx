import Image from "next/image";

export default function Hero2() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-green-600 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/ForestLeaf.jpg" 
          alt="Background Leaves"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
          Plant a Tree. Restore Bundelkhand. Rebuild Our Future.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-green-50 leading-relaxed">
          Your support helps us restore degraded lands, revive water sources, and empower
          rural communities across Bundelkhand. Every contribution plants real, trackable
          trees with geo-tagged updates and impact reports.
        </p>

      </div>
    </section>
  );
}
