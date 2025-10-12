"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerExample() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom", // 👈 triggers exactly when top of element hits bottom of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="space-y-[80vh] p-10 text-white">
      <div
       
        className="w-64 h-64 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-xl"
      >
        I animate exactly when you reach me!
      </div>
    </div>
  );
}
