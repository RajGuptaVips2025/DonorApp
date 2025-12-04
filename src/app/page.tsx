import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"; 
import Introduction from "@/Components/Introduction";
import Need from "@/Components/Need";
import Mission from "@/Components/Mission";
import Impact from "@/Components/Impact";
import Contribution from "@/Components/Contribution";
import Corporate from "@/Components/Corporate";
import Change from "@/Components/Change";
import Voices from "@/Components/Voices";

export default function Page() {
  return (
    <>
      <Navbar />
      <Introduction/>
      <div className="h-12 bg-white" />
      <Need/>
      <Mission/>
      <Impact/>
      <Contribution/>
      <Corporate/>
      <Change/>
      <Voices/>
      <Footer />
    </>
  );
}
