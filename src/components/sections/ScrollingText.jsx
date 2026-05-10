import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GsapRiseText() {
  const containerRef = useRef(null);
  const phrase = "Ready to Rise at Seven?";

  useEffect(() => {
    
    const totalX = -1600; 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-container",
        start: "top top", 
        end: "+=300%",    
        scrub: 1.5,
        pin: true,        
      }
    });

    // Flying Up
    tl.to(".char", {
      y: (i, target, targets) => -800 * Math.pow(i / targets.length, 3),
      rotate: (i, target, targets) => -40 * (i / targets.length),
      scale: (i, target, targets) => 1 + 0.4 * (i / targets.length),
      x: totalX * 0.5, // Slide halfway during the flight
      ease: "power1.inOut",
      stagger: 0.01
    })
    
  
    .to(".char", {
      y: 0,
      rotate: 0,
      scale: 1,
      x: totalX, 
      ease: "power2.inOut",
      stagger: 0.01
    }, "+=0.2"); // Brief pause at the peak height

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="animation-container bg-[#eeece8] overflow-hidden">
        <div className="h-screen flex items-center">
          <h1 className="text-[22vw] lg:text-[18vw] font-bold whitespace-nowrap pl-[15vw] flex">
            {phrase.split("").map((char, i) => (
              <span key={i} className="char inline-block origin-bottom-left" style={{ whiteSpace: 'pre' }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
      </div>

    
    </>
  );
}