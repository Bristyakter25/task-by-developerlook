import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import cardImg1 from "../../assets/images/featuredImg1.jpg";
import cardImg2 from "../../assets/images/featuredImg2.jpg";
import cardImg3 from "../../assets/images/featuredImg3.jpg";

const cards = [
  {
    title: "Pioneers",
    body: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
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
    body: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minute",
    bg: "#fff",
    color: "#000",
    img: cardImg3,
    initialRotate: -4,
  },
];

function Card({ card, index, scrollYProgress, totalCards }) {
  const segment = 1 / totalCards;

  const start = index * segment;
  const end = start + segment;

  /*
    Rise at Seven style behavior:
    - card waits
    - slowly starts moving
    - never fully disappears
    - next card naturally revealed
  */

  const rawY = useTransform(
    scrollYProgress,
    [start, start + segment * 0.35, end],
    ["0%", "-8%", "-95%"]
  );

  const rawRotate = useTransform(
    scrollYProgress,
    [start, end],
    [card.initialRotate, card.initialRotate * 1.8]
  );

  const rawScale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 0.96]
  );

  // smoother cinematic movement
  const y = useSpring(rawY, {
    stiffness: 45,
    damping: 22,
    mass: 1.1,
  });

  const rotate = useSpring(rawRotate, {
    stiffness: 60,
    damping: 20,
  });

  const scale = useSpring(rawScale, {
    stiffness: 70,
    damping: 22,
  });

  return (
    <motion.div
      style={{
        y: index === totalCards - 1 ? 0 : y,
        rotate:
          index === totalCards - 1
            ? card.initialRotate
            : rotate,
        scale,
        zIndex: totalCards - index,
        backgroundColor: card.bg,
        color: card.color,

        // stacked feeling
        top: `${index * 12}px`,
      }}
      className="
        absolute left-0 w-full h-full
        rounded-[42px]
        p-10
        flex flex-col items-center justify-center
   
        border border-black/5
        will-change-transform
        transform-gpu
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-3xl mb-8">
        <img
          src={card.img}
          alt={card.title}
          className="
            w-48 h-48 object-cover
            transition-transform duration-700
          "
        />
      </div>

      {/* Content */}
      <div className="max-w-md text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-5">
          {card.title}
        </h2>

        <p className="text-lg leading-relaxed opacity-80">
          {card.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div>
        <h3 className="text-center mt-10 text-black font-semibold text-lg">Legacy in the making</h3>
        <section
      ref={containerRef}
      className="relative "
      style={{
        height: `${cards.length * 160}vh`,
      }}
    >
      {/* Sticky scene */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Card stack */}
        <div className="relative w-[92%] max-w-[500px] h-[530px] perspective-[2000px]">
          {cards.map((card, index) => (
            <Card
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