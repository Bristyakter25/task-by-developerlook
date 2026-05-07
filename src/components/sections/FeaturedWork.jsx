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

const projects = [
  { id: 0,  title: "SIXT",               year: "[2023-2025]", category: "Car rental",    description: "An extra 3m clicks regionally through SEO",        image: img1  },
  { id: 1,  title: "Dojo - B2B",         year: "[2021-2025]", category: "Card Machines", description: "A B2B success story for Dojo card machines",        image: img2  },
  { id: 2,  title: "Magnet",             year: "[2023-2024]", category: "Trade",         description: "A full service SEO success story — 170%+ increase", image: img3  },
  { id: 3,  title: "Parkdean Resorts",   year: "[2019-2025]", category: "Easter breaks", description: "Dominating Google and AI search for Easter breaks",  image: img4  },
  { id: 4,  title: "Revolution Beauty",  year: "[2022-2025]", category: "Beauty dupes",  description: "Building the UK's leading beauty dupe brand",       image: img5  },
  { id: 5,  title: "JD Sports",          year: "[2025]",      category: "Trainers",      description: "65% up YoY in clicks for JD Sports FR, IT, ES",    image: img6  },
  { id: 6,  title: "Pooky",              year: "[2025]",      category: "Lighting",      description: "Driving demand for Pooky Rechargeable Lights",      image: img7  },
  { id: 7,  title: "Parkdean Resorts",   year: "[2019-2025]", category: "uk holidays",   description: "Social search and multi content",      image: img8  },
  { id: 8,  title: "Revolution Beauty",  year: "[2022-2025]", category: "Beauty Dupes",  description: "Building the UK's leading beauty dupe brand",      image: img9  },
  { id: 9,  title: "Lloyeds Pharmacy",   year: "[2022-2023]", category: "STI Tests",     description: "Driving category leadership for STI tests",      image: img10 },
  { id: 10, title: "Pretty Littlethings",year: "[2021-2023]", category: "STI Tests",     description: "Driving discovery for everything 'outfits' for PLT",      image: img11 },
];

const projectColors = [
  "#E8673A",
  "#7EC8C8",
  "#2D6A4F",
  "#3A6EA5",
  "#C9184A",
  "#222222",
  "#F4A261",
  "#52B788",
  "#E63946",
  "#457B9D",
  "#6D23B6",
];

function ImageCard({ src, tag, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[22px] bg-neutral-900 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={src}
          alt={tag}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white/80 tracking-wide">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {tag}
      </div>
    </div>
  );
}

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

// Reusable hover-aware main image card
function MainImageCard({ proj, isHovered, colorIdx }) {
  return (
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
          className="w-full h-full"
        />
      )}
    </AnimatePresence>
  );
}

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * projects.length), projects.length - 1);
    setActive(idx);
  });

  const displayIdx   = hovered !== null ? hovered : active;
  const currentProj  = projects[displayIdx];
  const nextProj     = active + 1 < projects.length ? projects[active + 1] : projects[active - 1];

  // ✅ isLast based on ACTIVE only — prevents layout switch flicker on hover
  const isLast = active === projects.length - 1;

  return (
    <div ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 w-full flex items-center justify-center p-4 md:p-6">
        <div className="w-full h-full max-w-[1400px] bg-[#0c0c0c] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT: CONTENT & LIST */}
          <div className="flex flex-col justify-between p-10 md:p-16">
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

              {/* Dot Navigation */}
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <div key={i} className={`h-[2px] transition-all duration-500 ${i === active ? "w-8 bg-white" : "w-3 bg-white/20"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE GRID */}
          <div className="relative w-[500px] mt-2 h-full flex flex-col gap-4 p-4">

            {isLast ? (
              <>
                {/* Previous image peeks from TOP */}
                <div className="flex-1 rounded-3xl overflow-hidden relative -translate-y-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={projects[active - 1].image}
                      src={projects[active - 1].image}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      className="w-full h-full"
                    />
                  </AnimatePresence>
                  <Tag label={projects[active - 1].category} />
                </div>

                {/* Last (current) image at BOTTOM — with hover effect */}
                <div className="flex-[1.3] rounded-3xl mb-5 overflow-hidden relative">
                  <MainImageCard
                    proj={currentProj}
                    isHovered={hovered !== null}
                    colorIdx={displayIdx}
                  />
                  <Tag label={currentProj.category} />
                </div>
              </>
            ) : (
              <>
                {/* Main Active Image — with hover effect */}
                <div className="flex-[1.3] rounded-3xl overflow-hidden relative">
                  <MainImageCard
                    proj={currentProj}
                    isHovered={hovered !== null}
                    colorIdx={displayIdx}
                  />
                  <Tag label={currentProj.category} />
                </div>

                {/* Peek Next Image */}
                <div className="flex-1 rounded-3xl overflow-hidden relative translate-y-4">
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
                  <Tag label={nextProj.category} />
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}