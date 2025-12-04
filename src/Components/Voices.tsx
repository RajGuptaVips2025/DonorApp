'use client';

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Earlier our fields stayed dry and unused. After the plantation, the soil has improved, and I'm able to grow fodder again. This project has brought hope back to our village.",
    name: "Ramesh Patel",
    role: "Farmer – Tikamgarh",
    imageSrc: "/Voices1.jpg", 
  },
  {
    id: 2,
    quote: "I never imagined planting saplings could give us steady income. Today, our group runs a nursery and supports our families with pride.",
    name: "Sunita Devi",
    role: "Women SHG Leader – Lalitpur",
    imageSrc: "/Voices2.jpg", 
  },
  {
    id: 3,
    quote: "The transparency and data reporting gave us complete confidence — geo-tagged updates, survival reports, and carbon data make this a model CSR project.",
    name: "CSR Lead",
    role: "GreenEarth Industries",
    imageSrc: "/Voices3.jpg", 
  },
];

const TestimonialCard = ({ quote, name, role, imageSrc }: { quote: string; name: string; role: string; imageSrc: string }) => (
  <div className="bg-white rounded-[2rem] p-8 shadow-lg relative flex flex-col items-center text-center mt-12 h-full">
    <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
      <Image src={imageSrc} alt={name} fill className="object-cover" />
    </div>
    <p className="text-green-700 text-sm leading-relaxed mt-10 mb-6 flex-grow">
      "{quote}"
    </p>
    <div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-green-600 text-sm font-medium">{role}</p>
    </div>
  </div>
);

const Voices = () => {
  return (
    <section className="bg-white py-16 md:py-20 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-[3rem] border-[8px] border-gray-100 overflow-hidden shadow-sm">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/Forest.jpg" 
                    alt="Forest background texture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-green-700/80" />
            </div>

            <div className="relative z-10 px-6 py-16 md:px-12 md:py-24 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                Voices From Bundelkhand
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 drop-shadow-sm opacity-95">
                When communities grow, the land grows with them.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                {testimonials.map((testimonial) => (
                    <TestimonialCard
                    key={testimonial.id}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    imageSrc={testimonial.imageSrc}
                    />
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Voices;

