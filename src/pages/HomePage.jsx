import Banner from "../components/sections/Banner";
import BrandNames from "../components/sections/BrandNames";
import ServiceSection from "../components/sections/ServiceSection";


const HomePage = () => {
    return (
       <div className="bg-[#f0f0f0]">
       <Banner></Banner>
       <BrandNames></BrandNames>
       <ServiceSection></ServiceSection>
       </div>
    );
};

export default HomePage;