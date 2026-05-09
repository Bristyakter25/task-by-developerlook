import { MoveUpRight } from "lucide-react";
import { useRef, useState } from "react";
import marqueeImg from "../../assets/images/marqueeImg.jpg";
import marqueeImg2 from "../../assets/images/marqueeImg2.jpg";

export default function Marquee() {
  const sectionRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const marqueeContent = (
    <div className="flex items-center shrink-0">
      <span
        className="text-7xl md:text-7xl lg:text-8xl xl:text-10xl  font-sans-primary font-semibold tracking-tight text- leading-none text-grey-900 whitespace-nowrap px-8"
        style={{ letterSpacing: "-0.04em" }}
      >
       Chasing Consumers
      </span>
      <span className="inline-flex items-center shrink-0 mx-2">
        <img
          src={marqueeImg}
          alt="Team"
          className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-2xl object-cover"
        />


      
      </span>
      <span
        className="text-7xl  md:text-7xl  lg:text-8xl  xl:text-10xl  font-sans-primary font-semibold tracking-tight text- leading-none text-grey-900 whitespace-nowrap px-8"
        style={{ letterSpacing: "-0.04em" }}
      >
        Not Chasing Algorithms
      </span>
      <span className="inline-flex items-center shrink-0 mx-2">
        <img
          src={marqueeImg2}
          alt="Team 2"
          className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-2xl object-cover"
        />
      </span>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-6 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Marquee Track */}
      <div
        className="flex w-max"
        style={{
          animation: "marquee 34s linear infinite",
          animationPlayState: hovered ? "paused" : "running",
        }}
      >
        {marqueeContent}
        {marqueeContent}
      </div>

      {/* Cursor */}
      <div
        className="absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: hovered ? 1 : 0,
        }}
      >
        <div
          className="
            flex items-center gap-2
            bg-[#a8f0d8] text-black
            px-6 py-3 rounded-full
            text-base font-semibold
            shadow-lg
            whitespace-nowrap
          "
          style={{
            transform: `scale(${hovered ? 1 : 0.85})`,
            transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          Send Us Your Brief
          <MoveUpRight size={16} />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}