import DonorSection from "@/Components/DonorSection";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Hero2 from "@/Components/Hero2";
import Navbar from "@/Components/Navbar";

export default function Page() {
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