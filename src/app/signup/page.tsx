import DonorLoginSection from "@/Components/DonorLoginSection";
import DonorSignUpSection from "@/Components/DonorSignUpSection";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
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

            <div className="h-12 bg-white" />

            {/* <DonorLoginSection backgroundImage="/Forest.jpg" /> */}
            <DonorSignUpSection backgroundImage="/Forest.jpg" />

            <Footer />
        </>
    );
}