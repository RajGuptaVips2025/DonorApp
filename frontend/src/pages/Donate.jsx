import DonorSection from "@/components/DonorSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";

export default function Donate() {
    return (
        <>
            <Navbar />
            <Hero
                imageSrc="/Farmer.jpg"
                imageAlt="Farmer holding saplings"
                subtitle="JOIN OUR MISSION TO"
                title="RESTORE BUNDELKHAND"
            />
            <Hero2 />
            <div className="h-12 bg-white" />
            <DonorSection />
            <Footer/>
        </>
    );
}