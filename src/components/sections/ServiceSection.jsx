import { MoveUpRight } from "lucide-react";
import img from "../../assets/images/img.jpg";


const ServiceSection = () => {
  return (
  <div className="px-6 md:px-8 py-10">
     <div className=" flex flex-col-reverse md:flex-row justify-between gap-8">

      {/* Left Column: Description */}
      <section className="lg:w-2/5 w-[350px] pt-2 text-left justify-start text-grey-950 text-lg/tight | lg:text-lg/tight | xl:text-2xl/none | 4xl:text-3xl/none font-sans-primary font-medium tracking-tight js-heading">
        A global team of search-first content marketers engineering semantic
        relevancy &amp; category signals for both the internet and people
      </section>

      {/* inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-lg/tight | lg:text-lg/tight | xl:text-2xl/none | 4xl:text-3xl/none font-sans-primary font-medium tracking-tight js-heading */}

      {/* Right Column: Heading and Buttons */}
      <section className="md:w-3/5 flex flex-col items-start">

        {/* Heading */}
        <h1 className="text-5xl md:text-[772px] lg:text-6xl font-semibold tracking-tighter text-gray-900 font-sans leading-[0.92]">
          Driving Demand &amp;
          <br />
          <span className="inline-flex mt-1 items-end gap-2">
            Discovery
            <img
              src={img}
              alt="man holding sign"
              className="inline-block w-14  h-14 md:w-16 md:h-16 rounded-xl object-cover -mb-2 shadow-sm"
            />
          </span>
        </h1>

       

      </section>

     
    </div>
      {/* Buttons */}
      <div className="mt-12 flex flex-col lg:flex-row gap-3 justify-center items-center lg:ml-32">
  
  {/* Button 1: Our Story */}
  <button className="group relative flex w-full lg:w-auto justify-center items-center gap-2 overflow-hidden bg-white text-black px-5 py-3 rounded-full font-bold hover:rounded-xl transition-[border-radius] duration-300">
    <span className="relative overflow-hidden h-[1.2em] flex items-center">
      <span className="block font-sans-primary font-medium whitespace-nowrap translate-y-0 group-hover:-translate-y-[110%] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        Our Story
      </span>
      <span className="absolute font-sans-primary font-medium inset-0 flex items-center whitespace-nowrap translate-y-[110%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        Our Story
      </span>
    </span>
    <span className="inline-flex transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
      <MoveUpRight size={18} />
    </span>
  </button>

  {/* Button 2: Our Services */}
  <button className="group relative flex w-full lg:w-auto justify-center items-center gap-2 overflow-hidden text-black px-4 py-3 rounded-full font-bold hover:rounded-xl transition-[border-radius] duration-300">
    <span className="relative overflow-hidden h-[1.2em] flex items-center">
      <span className="block font-sans-primary font-medium whitespace-nowrap translate-y-0 group-hover:-translate-y-[110%] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        Our Services
      </span>
      <span className="absolute font-sans-primary font-medium inset-0 flex items-center whitespace-nowrap translate-y-[110%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        Our Services
      </span>
    </span>
    <span className="inline-flex transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
      <MoveUpRight size={18} />
    </span>
  </button>

</div>
  </div>
  );
};

export default ServiceSection;