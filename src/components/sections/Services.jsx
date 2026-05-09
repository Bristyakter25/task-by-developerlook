import { MoveUpRight } from "lucide-react";
import img from "../../assets/images/serviceImg.jpg";
import serviceImg1 from "../../assets/images/serviceImg0.jpg";
import serviceImg2 from "../../assets/images/serviceImg1.jpg";
import serviceImg3 from "../../assets/images/serviceImg2.jpg";
import serviceImg4 from "../../assets/images/serviceImg3.jpg";
import serviceImg5 from "../../assets/images/serviceImg4.jpg";
import serviceImg6 from "../../assets/images/serviceImg5.jpg";

export default function Services() {
  const services = [
    { name: "Digital PR", img: serviceImg1 },
    { name: "Organic Social & Content", img: serviceImg2 },
    { name: "Search & Growth Strategy", img: serviceImg3 },
    { name: "Content Experience", img: serviceImg4 },
    { name: "Data & Insights", img: serviceImg5 },
    { name: "Onsite SEO", img: serviceImg6 },
  ];

  return (
    <section className="max-w-[1140px] mx-auto px-6 py-12 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black flex items-center flex-wrap">
          Our
          <span className="inline-block mx-4">
            <img
              src={img}
              alt="Team working"
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover shadow-sm"
            />
          </span>
          Services
        </h1>
        <button className="group relative flex items-center gap-2 overflow-hidden bg-white border border-gray-200 text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
          <span className="relative overflow-hidden h-[1.2em] flex items-center">
            <span className="block translate-y-0 group-hover:-translate-y-[110%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              View All Services
            </span>
            <span className="absolute inset-0 flex items-center translate-y-[110%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              View All Services
            </span>
          </span>
          <MoveUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-400 mb-10" />
<div className="grid grid-cols-1  mx-13 md:grid-cols-2 gap-x-20">
  {services.map((service, index) => (
    <div
      key={index}
     className="
  group relative overflow-visible
  border-b border-black/10
  group-hover:border-transparent
  transition-colors duration-500
  hover:z-30
  cursor-pointer
  py-5
"
    >
      {/* Hover Background — bleeds over the bottom border by 1px */}
      <div
        className="
          absolute -inset-x-3 -top-2 -bottom-2 w-[500px]
          opacity-0 group-hover:opacity-100
          [clip-path:inset(0_100%_0_0_round_40px)]
          group-hover:[clip-path:inset(0_0_0_0_round_40px)]
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          z-10
        "
      >
        {/* Image */}
        <img
          src={service.img}
          alt={service.name}
          className="
            absolute inset-0
            w-full h-full object-cover
            scale-110 group-hover:scale-100
            transition-transform duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-between h-full px-6 py-6">
          <div className="flex items-center gap-4">

            {/* Animated Arrow */}
            <div className="overflow-hidden h-10 w-10 flex items-center justify-center">
              <MoveUpRight
                size={22}
                className="
                  text-white
                  translate-y-10 group-hover:translate-y-0
                  transition-transform duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              />
            </div>

            {/* Hover Text */}
            <span className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
              {service.name}
            </span>
          </div>
        </div>
      </div>

      {/* Default Text */}
      <h2
        className="
          relative z-0
          text-3xl md:text-4xl
          font-medium tracking-tight text-black
          transition-all duration-400
          group-hover:opacity-0
          group-hover:-translate-y-2
        "
      >
        {service.name}
      </h2>
    </div>
  ))}
</div>
    </section>
  );
}