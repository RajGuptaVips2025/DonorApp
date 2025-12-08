import DonorLoginSection from "@/components/DonorLoginSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Login() {
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
            <DonorLoginSection backgroundImage="/Forest.jpg" />
            <Footer />
        </>
    );
}