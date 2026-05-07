import brandLogo1 from "../../assets/images/brandLogo1.png";
import brandLogo2 from "../../assets/images/brandLogo2.png";
import brandLogo3 from "../../assets/images/brandLogo3.png";
import brandLogo4 from "../../assets/images/brandLogo4.png";
import brandLogo5 from "../../assets/images/brandLogo5.png";
import brandLogo6 from "../../assets/images/brandLogo6.png";

const logos = [
  { id: 1, src: brandLogo1, alt: "SIXT" },
  { id: 2, src: brandLogo2, alt: "Revolution Beauty London" },
  { id: 3, src: brandLogo3, alt: "PlayStation" },
  { id: 4, src: brandLogo4, alt: "AXA" },
  { id: 5, src: brandLogo5, alt: "Brand 5" },
  { id: 6, src: brandLogo6, alt: "Brand 6" },
];

export default function BrandNames() {
  return (
    <section className="w-full  py-10">
      <div className="flex items-center gap-4">

       
        <div className="shrink-0 pl-5 md:pl-8">
          <p className="text-black text-sm  font-medium ">
            The agency behind ..
          </p>
        </div>

       
        <div className="relative flex-1 overflow-hidden">

          {/* blurry effects */}
{/* Left Blur Overlay */}
<div
  className="absolute left-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none"
  style={{
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    // This mask makes the BLUR itself fade out smoothly
    maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 20%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.8) 20%, transparent 100%)",
  }}
/>

{/* Right Blur Overlay */}
<div
  className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none"
  style={{
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    maskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.8) 20%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.8) 20%, transparent 100%)",
  }}
/>

      
          <div className="flex w-max animate-marquee items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0 px-14 md:px-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 md:h-12 w-auto object-contain  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}