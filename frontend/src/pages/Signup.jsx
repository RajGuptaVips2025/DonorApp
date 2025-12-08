import DonorSignUpSection from "@/components/DonorSignUpSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Signup() {
    return (
        <>
            <Navbar />
            <Hero
                imageSrc="/Farmer.jpg"
                imageAlt="Farmer holding saplings"
                subtitle="JOIN OUR MISSION TO"
                title="RESTORE BUNDELKHAND"
            />
            <div className="h-12 bg-white" />
            <DonorSignUpSection backgroundImage="/Forest.jpg" />
            <Footer />
        </>
    );
}