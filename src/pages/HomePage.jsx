import Banner from "../components/sections/Banner";
import BrandNames from "../components/sections/BrandNames";
import FeaturedWork from "../components/sections/FeaturedWork";
import Marquee from "../components/sections/Marquee";
import Services from "../components/sections/Services";
import ServiceSection from "../components/sections/ServiceSection";


const HomePage = () => {
    return (
       <div className="bg-[#f0f0f0]">
       <Banner></Banner>
       <BrandNames></BrandNames>
       <ServiceSection></ServiceSection>
       <FeaturedWork></FeaturedWork>
       <Services></Services>
       <Marquee></Marquee>
       </div>
    );
};

export default HomePage;