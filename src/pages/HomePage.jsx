import Banner from "../components/sections/Banner";
import BrandNames from "../components/sections/BrandNames";
import FeaturedWork from "../components/sections/FeaturedWork";
import Features from "../components/sections/Features";
import Marquee from "../components/sections/Marquee";
import NewArrivals from "../components/sections/NewArrivals";
import ScrollingText from "../components/sections/ScrollingText";
import Services from "../components/sections/Services";
import ServiceSection from "../components/sections/ServiceSection";


const HomePage = () => {
    return (
       <div className="bg-[#f0f0f0] w-full">
       <Banner></Banner>
       <BrandNames></BrandNames>
       <ServiceSection></ServiceSection>
       <FeaturedWork></FeaturedWork>
       <Services></Services>
       <Marquee></Marquee>
       <Features></Features>
       <NewArrivals></NewArrivals>
      <div className="hidden md:block">
         <ScrollingText></ScrollingText>
      </div>
       </div>
    );
};

export default HomePage;