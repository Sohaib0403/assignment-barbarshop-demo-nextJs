import Client from "@/Components/Client/Client";
import Contact from "@/Components/contactUs/Contact";
import MainDisplay from "@/Components/displaySection/MainDisplay";
import DisplaySection2 from "@/Components/displaySection2/DisplaySection2";
import Footer from "@/Components/Footer/Footer";
import Intro from "@/Components/introSection/Intro";
import NavBar from "@/Components/NavBar/NavBar";
import NewsBlock from "@/Components/NewsBlock/NewsBlock";
import OurWork from "@/Components/OurWork/OurWork";
import Pricing from "@/Components/Pricing/Pricing";
import Review from "@/Components/Review/Review";
import Services from "@/Components/ServiceSection/Services";
import Team from "@/Components/Team/Team";



export default function Home() {
  return (
    <div className="w-full h-full">
    <NavBar/>
    <MainDisplay/>
    <Intro/>
    <Services/>
    <Contact/>
    <Team/>
    <Review/>
    <Pricing/>
    <DisplaySection2/>
    <NewsBlock/>
    <Client/>
    <OurWork/>
    <Footer/>
    </div>
  );
}
