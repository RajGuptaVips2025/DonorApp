import Contribution from "@/components/Contribution"
import Corporate from "@/components/Corporate"
import Footer from "@/components/Footer"
import Impact from "@/components/Impact"
import Introduction from "@/components/Introduction"
import Mission from "@/components/Mission"
import Navbar from "@/components/Navbar"
import Need from "@/components/Need"
import Voices from "@/components/Voices"

const Home = () => {
    return (
        <>
            <Navbar />
            <Introduction />
            <Need />
            <Mission />
            <Impact />
            <Contribution />
            <Corporate />
            <Voices />
            <Footer />
        </>
    )
}

export default Home