import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import cardImg1 from "../../assets/images/featuredImg1.jpg";
import cardImg2 from "../../assets/images/featuredImg2.jpg";
import cardImg3 from "../../assets/images/featuredImg3.jpg";

const cards = [
  {
    title: "Pioneers",
    body: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    bg: "#b8f5e0",
    color: "#000",
    img: cardImg1,
    initialRotate: -8,
  },
  {
    title: "Award Winning",
    body: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards",
    bg: "#111",
    color: "#fff",
    img: cardImg2,
    initialRotate: -6,
  },
  {
    title: "Speed",
    body: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms.",
    bg: "#fff",
    color: "#000",
    img: cardImg3,
    initialRotate: -4,
  },
];

// DESKTOP CARD (Sticky Logic)
function DesktopCard({ card, index, scrollYProgress, totalCards }) {
  const segment = 1 / totalCards;
  const start = index * segment;
  const end = start + segment;

  const rawY = useTransform(scrollYProgress, [start, start + segment * 0.35, end], ["0%", "-8%", "-95%"]);
  const rawRotate = useTransform(scrollYProgress, [start, end], [card.initialRotate, card.initialRotate * 1.8]);
  const rawScale = useTransform(scrollYProgress, [start, end], [1, 0.96]);

  const y = useSpring(rawY, { stiffness: 45, damping: 22, mass: 1.1 });
  const rotate = useSpring(rawRotate, { stiffness: 60, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 70, damping: 22 });

  return (
    <motion.div
      style={{
        y: index === totalCards - 1 ? 0 : y,
        rotate: index === totalCards - 1 ? card.initialRotate : rotate,
        scale,
        zIndex: totalCards - index,
        backgroundColor: card.bg,
        color: card.color,
        top: `${index * 12}px`,
      }}
      className="absolute left-0 w-full h-full rounded-[42px] p-10 flex flex-col items-center justify-center border border-black/5 will-change-transform transform-gpu overflow-hidden"
    >
      <div className="overflow-hidden rounded-3xl mb-8">
        <img src={card.img} alt={card.title} className="w-48 h-48 object-cover" />
      </div>
      <div className="max-w-md text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-5">{card.title}</h2>
        <p className="text-lg leading-relaxed opacity-80">{card.body}</p>
      </div>
    </motion.div>
  );
}

// MOBILE SLIDER CARD
function MobileCard({ card }) {
  return (
    <div
      style={{ backgroundColor: card.bg, color: card.color }}
      className="flex-shrink-0 w-[82vw] max-w-[400px] min-h-[480px] rounded-[28px] p-7 flex flex-col items-center justify-center border border-black/5"
    >
      <div className="overflow-hidden rounded-[18px] mb-5 w-full">
        <img src={card.img} alt={card.title} className="w-full h-64 object-cover" />
      </div>
      <div className="text-center">
        <h2 className="text-[26px] font-bold tracking-tight mb-3">{card.title}</h2>
        <p className="text-sm leading-relaxed opacity-85">{card.body}</p>
      </div>
    </div>
  );
}

export default function Features() {

  const [activeIndex, setActiveIndex] = useState(0);
const containerRef = useRef(null);        // ← was missing
const trackRef = useRef(null);
const touchStartX = useRef(0);
const dragStartX = useRef(0);
const baseOffset = useRef(0);
const isDragging = useRef(false);

const { scrollYProgress } = useScroll({   // ← was missing
  target: containerRef,
  offset: ["start start", "end end"],
});
  
function getCardWidth() {
  const card = trackRef.current?.children[0];
  return card ? card.offsetWidth + 16 : 0;
}

function goTo(index) {
  const clamped = Math.max(0, Math.min(index, cards.length - 1));
  setActiveIndex(clamped);
  const offset = clamped * getCardWidth();
  if (trackRef.current) {
    trackRef.current.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }
}

function onMouseDown(e) {
  isDragging.current = true;
  dragStartX.current = e.clientX;
  baseOffset.current = activeIndex * getCardWidth();
  if (trackRef.current) trackRef.current.style.transition = "none";
}
function onMouseMove(e) {
  if (!isDragging.current || !trackRef.current) return;
  const delta = e.clientX - dragStartX.current;
  trackRef.current.style.transform = `translateX(${-baseOffset.current + delta}px)`;
}
function onMouseUp(e) {
  if (!isDragging.current) return;
  isDragging.current = false;
  const delta = e.clientX - dragStartX.current;
  if (delta < -50) goTo(activeIndex + 1);
  else if (delta > 50) goTo(activeIndex - 1);
  else goTo(activeIndex);
}
function onTouchStart(e) {
  touchStartX.current = e.touches[0].clientX;
  baseOffset.current = activeIndex * getCardWidth();
  if (trackRef.current) trackRef.current.style.transition = "none";
}
function onTouchMove(e) {
  if (!trackRef.current) return;
  const delta = e.touches[0].clientX - touchStartX.current;
  trackRef.current.style.transform = `translateX(${-baseOffset.current + delta}px)`;
}
function onTouchEnd(e) {
  const delta = e.changedTouches[0].clientX - touchStartX.current;
  if (delta < -50) goTo(activeIndex + 1);
  else if (delta > 50) goTo(activeIndex - 1);
  else goTo(activeIndex);
}

  return (
    <div className="bg-[#f3f3f3] pb-20">
      <h3 className="text-center pt-10 pb-5 text-black font-semibold text-lg">Legacy in the making</h3>

      {/* MOBILE VIEW: Horizontal Slider */}
     <div
  className="md:hidden overflow-hidden"
  onMouseDown={onMouseDown}
  onMouseMove={onMouseMove}
  onMouseUp={onMouseUp}
  onMouseLeave={onMouseUp}
>
  <div
    ref={trackRef}
    className="flex gap-4 px-6 will-change-transform cursor-grab active:cursor-grabbing select-none"
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
  >
    {cards.map((card, index) => (
      <MobileCard key={index} card={card} />
    ))}
  </div>
</div>

{/* Pagination dots */}
<div className="md:hidden flex justify-center gap-[6px] mt-5 items-center">
  {cards.map((_, i) => (
    <div
      key={i}
      onClick={() => goTo(i)}
      className={`h-1 rounded-full bg-black cursor-pointer transition-all duration-300 ${
        i === activeIndex ? "w-9 opacity-100" : "w-3.5 opacity-20"
      }`}
    />
  ))}
</div>

      {/* DESKTOP VIEW: Sticky Stack (Hidden on Mobile) */}
      <section
        ref={containerRef}
        className="hidden md:block relative"
        style={{ height: `${cards.length * 160}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-[92%] max-w-[500px] h-[530px] perspective-[2000px]">
            {cards.map((card, index) => (
              <DesktopCard
                key={index}
                card={card}
                index={index}
                totalCards={cards.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>
      
     
    </div>
  );
}