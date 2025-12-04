'use client';

import Image from 'next/image';

const needCards = [
    {
        id: 1,
        title: "Severe Water Scarcity",
        description: "Extreme water shortage affects daily life and agriculture",
        image: "/Need1.jpg",
        bgColor: "bg-gray-50",
        textColor: "text-gray-900",
        descColor: "text-gray-600",
        titleColor: "text-gray-900"
    },
    {
        id: 2,
        title: "Land degradation & low soil fertility",
        description: "Years of soil erosion have turned fertile land into barren patches",
        image: "/Need2.jpg",
        bgColor: "bg-green-600",
        textColor: "text-white",
        descColor: "text-green-50",
        titleColor: "text-white"
    },
    {
        id: 3,
        title: "Low Livelihood Opportunities",
        description: "Limited income sources force families into economic distress",
        image: "/Need3.jpg",
        bgColor: "bg-gray-50",
        textColor: "text-gray-900",
        descColor: "text-gray-600",
        titleColor: "text-gray-900"
    },
    {
        id: 4,
        title: "High Migration",
        description: "Thousands migrate every year in search of livelihood",
        image: "/Need4.jpg",
        bgColor: "bg-gray-50",
        textColor: "text-gray-900",
        descColor: "text-gray-600",
        titleColor: "text-gray-900"
    },
    {
        id: 5,
        title: "Declining Green Cover",
        description: "Loss of trees worsens climate stress and soil erosion",
        image: "/Need5.jpg",
        bgColor: "bg-gray-50",
        textColor: "text-gray-900",
        descColor: "text-gray-600",
        titleColor: "text-gray-900"
    },
];

const Need = () => {
    return (
        <section className="py-16 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-14">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
                        Why Deep Jasmine Foundation Needs Us
                    </h2>
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                        Bundelkhand is one of India’s most climate-stressed regions. These are the urgent challenges we’re addressing through restoration and community-led solutions
                    </p>
                </div>
            </div>
            <div className="relative w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {needCards.map((card, index) => (
                        <div 
                            key={`set1-${index}`} 
                            className={`mx-4 w-[300px] md:w-[350px] shrink-0 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300 ${card.bgColor}`}
                        >
                            <div className="relative w-24 h-24 mb-6 drop-shadow-md">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${card.titleColor}`}>
                                {card.title}
                            </h3>
                            <p className={`text-sm leading-relaxed px-2 ${card.descColor}`}>
                                {card.description}
                            </p>
                        </div>
                    ))}

                    {needCards.map((card, index) => (
                        <div 
                            key={`set2-${index}`} 
                            className={`mx-4 w-[300px] md:w-[350px] shrink-0 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300 ${card.bgColor}`}
                        >
                            <div className="relative w-24 h-24 mb-6 drop-shadow-md">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className={`text-xl font-bold mb-4 ${card.titleColor}`}>
                                {card.title}
                            </h3>
                            <p className={`text-sm leading-relaxed px-2 ${card.descColor}`}>
                                {card.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Need;




