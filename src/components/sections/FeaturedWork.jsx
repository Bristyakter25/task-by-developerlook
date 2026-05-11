import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState, useRef } from "react";
import img1 from "../../assets/images/work1.PNG";
import img2 from "../../assets/images/work2.PNG";
import img3 from "../../assets/images/work3.PNG";
import img4 from "../../assets/images/work4.PNG";
import img5 from "../../assets/images/work5.PNG";
import img6 from "../../assets/images/work6.PNG";
import img7 from "../../assets/images/work7.PNG";
import img8 from "../../assets/images/work8.PNG";
import img9 from "../../assets/images/work9.PNG";
import img10 from "../../assets/images/work10.PNG";
import img11 from "../../assets/images/work11.PNG";

import { MoveUpRight } from "lucide-react";

const projects = [
  { id: 0,  title: "SIXT",                year: "[2023-2025]", category: "Car rental",    description: "An extra 3m clicks regionally through SEO",                   image: img1  },
  { id: 1,  title: "Dojo - B2B",          year: "[2021-2025]", category: "Card Machines", description: "A B2B success story for Dojo card machines",                   image: img2  },
  { id: 2,  title: "Magnet",              year: "[2023-2024]", category: "Trade",         description: "A full service SEO success story — 170%+ increase",            image: img3  },
  { id: 3,  title: "Parkdean Resorts",    year: "[2019-2025]", category: "Easter breaks", description: "Dominating Google and AI search for Easter breaks",             image: img4  },
  { id: 4,  title: "Revolution Beauty",   year: "[2022-2025]", category: "Beauty dupes",  description: "Building the UK's leading beauty dupe brand",                  image: img5  },
  { id: 5,  title: "JD Sports",           year: "[2025]",      category: "Trainers",      description: "65% up YoY in clicks for JD Sports FR, IT, ES",               image: img6  },
  { id: 6,  title: "Pooky",               year: "[2025]",      category: "Lighting",      description: "Driving demand for Pooky Rechargeable Lights",                 image: img7  },
  { id: 7,  title: "Parkdean Resorts",    year: "[2019-2025]", category: "uk holidays",   description: "Social search and multi content",                              image: img8  },
  { id: 8,  title: "Revolution Beauty",   year: "[2022-2025]", category: "Beauty Dupes",  description: "Building the UK's leading beauty dupe brand",                  image: img9  },
  { id: 9,  title: "Lloyeds Pharmacy",    year: "[2022-2023]", category: "STI Tests",     description: "Driving category leadership for STI tests",                    image: img10 },
  { id: 10, title: "Pretty Littlethings", year: "[2021-2023]", category: "STI Tests",     description: "Driving discovery for everything 'outfits' for PLT",           image: img11 },
];

const projectColors = [
  "#E8673A","#7EC8C8","#2D6A4F","#3A6EA5","#C9184A",
  "#222222","#F4A261","#52B788","#E63946","#457B9D","#6D23B6",
];

function Tag({ label }) {
  return (
    <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-[10px] font-bold">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      {label}
    </div>
  );
}

// Image card with cursor-follow hover effect
function HoverImageCard({ children, tag, className = "" }) {
  const wrapperRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={wrapperRef}
      className={`group relative cursor-none rounded-3xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cursor-following arrow */}
      <div
        className="pointer-events-none absolute z-20 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <div
          className="bg-[#B2F6E3] rounded-full p-10"
          style={{
            transform: isHovered ? "scale(1)" : "scale(0.6)",
            transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <MoveUpRight size={20} className="text-gray-900" />
        </div>
      </div>

      {/* Content (image or color panel) */}
      <div className="w-full h-full transition-all duration-500 ease-out group-hover:brightness-75 group-hover:scale-105">
        {children}
      </div>

      {tag && <Tag label={tag} />}
    </div>
  );
}

function MainImageCard({ proj, isHovered, colorIdx, tag, className = "" }) {
  return (
    <HoverImageCard tag={tag} className={className}>
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.div
            key={`color-${colorIdx}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full flex items-end p-8"
            style={{ backgroundColor: projectColors[colorIdx] }}
          >
            <p className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight max-w-xs">
              {proj.description}
            </p>
          </motion.div>
        ) : (
          <motion.img
            key={`img-${proj.image}`}
            src={proj.image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full object-cover"
          />
        )}
      </AnimatePresence>
    </HoverImageCard>
  );
}

export default function FeaturedWork() {
  const [active, setActive]   = useState(0);
  const [hovered, setHovered] = useState(null);
  const containerRef          = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * projects.length), projects.length - 1);
    setActive(idx);
  });

  const displayIdx  = hovered !== null ? hovered : active;
  const currentProj = projects[displayIdx];
  const nextProj    = active + 1 < projects.length ? projects[active + 1] : projects[active - 1];
  const isLast      = active === projects.length - 1;

  return (
    <div>
      <div ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
        <div className="sticky top-0 w-full flex items-center justify-center p-4 md:p-6 h-screen overflow-hidden">
          <div className="w-full h-full max-w-[1400px] bg-[#0c0c0c] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] lg:max-h-none">
<p className="lg:hidden text-[14px] pl-7 pt-6 font-bold text-white uppercase">Featured Work</p>
            {/* LEFT: CONTENT & LIST — hidden on mobile/tablet, visible on lg+ */}
            <div className="hidden lg:flex flex-col justify-between p-10 md:p-16">
              <p className="text-[14px] font-bold text-white uppercase">Featured Work</p>

              <div className="flex flex-col gap-1">
                {projects.map((p, i) => {
                  const isPast   = i < active;
                  const isActive = i === active;
                  const isNext   = i === active + 1;
                  const isFar    = i > active + 1;

                  if (isPast && i < active - 1) return null;
                  if (isFar  && i > active + 3) return null;

                  return (
                    <motion.div
                      key={p.id}
                      animate={{
                        opacity: isActive ? 1 : isNext ? 0.4 : 0.1,
                        scale: isActive ? 1 : 0.95,
                      }}
                      className="flex items-start gap-4 cursor-pointer origin-left"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <h2 className={`font-bold leading-[0.9] tracking-tighter text-white ${
                        isActive ? "text-4xl md:text-6xl" : "text-4xl md:text-5xl opacity-50"
                      }`}>
                        {p.title}
                      </h2>
                      {(isActive || isNext) && (
                        <span className="text-[10px] text-white/30 mt-2 font-mono">{p.year}</span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="max-w-xs"
                  >
                    <div className="w-8 h-[2px] bg-white mb-6" />
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">{currentProj.category}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{currentProj.description}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-2">
                  {projects.map((_, i) => (
                    <div key={i} className={`h-[2px] transition-all duration-500 ${i === active ? "w-8 bg-white" : "w-3 bg-white/20"}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE GRID — full width on mobile, half on lg+ */}
            <div className="relative w-full lg:w-[500px] mt-2 h-[70vh] lg:h-full flex flex-col gap-4 p-4 overflow-hidden">

              {isLast ? (
                <>
                  {/* Previous image peeks from TOP */}
                  <HoverImageCard tag={projects[active - 1].category} className="flex-1 -translate-y-4">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={projects[active - 1].image}
                        src={projects[active - 1].image}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </HoverImageCard>

                  {/* Last (current) image at BOTTOM */}
                  <MainImageCard
                    proj={currentProj}
                    isHovered={hovered !== null}
                    colorIdx={displayIdx}
                    tag={currentProj.category}
                    className="flex-[1.3] mb-5"
                  />
                </>
              ) : (
                <>
                  {/* Main Active Image */}
                  <MainImageCard
                    proj={currentProj}
                    isHovered={hovered !== null}
                    colorIdx={displayIdx}
                    tag={currentProj.category}
                    className="flex-[1.3]"
                  />

                  {/* Peek Next Image */}
                  <HoverImageCard tag={nextProj.category} className="flex-1 translate-y-4">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={nextProj.image}
                        src={nextProj.image}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>
                  </HoverImageCard>
                </>
              )}

            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-5">
        <button className="group relative flex items-center gap-2 overflow-hidden bg-white text-black px-5 py-3 rounded-full font-bold hover:rounded-xl transition-[border-radius] duration-300">
          <span className="relative overflow-hidden h-[1.2em] flex items-center">
            <span className="block font-sans-primary font-medium whitespace-nowrap translate-y-0 group-hover:-translate-y-[110%] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
              Explore our work
            </span>
            <span className="absolute font-sans-primary font-medium inset-0 flex items-center whitespace-nowrap translate-y-[110%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
              Explore our work
            </span>
          </span>
          <span className="inline-flex transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
            <MoveUpRight size={18} />
          </span>
        </button>
      </div>
    </div>
  );
}