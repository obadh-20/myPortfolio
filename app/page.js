'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SplashCursor from '@/components/SplashCursor'
import ScrollTriggerExample from "@/components/ScrollTriggerExample"
import MagicBento from '@/components/MagicBento'
import { BentoGridDemo } from "@/components/BentoGridDemo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, rotateX:-60,y: 100 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom", // 👈 triggers exactly when top of element hits bottom of viewport
          toggleActions: "play none none none",
        },
      }
    );
    gsap.utils.toArray(".GroupOneBox").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, rotateX: 40, y: 80, rotateY:40},
        {
          opacity: 1,
          rotateX: 0,
          rotateY:0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // trigger when near viewport
            toggleActions: "play none none none",
          },
        }
      );

      // Hover: rotate slightly to the right
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          rotateZ: 5,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          transformOrigin: "center center",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          rotateZ: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });

    // Group 2: fade in + flip (left side)
    gsap.utils.toArray(".GroupTwoBox").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, rotateX: -40, y: 80, rotateY:40 },
        {
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // trigger when near viewport
            toggleActions: "play none none none",
          },
        }
      );

      // Hover: rotate slightly to the left
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          rotateZ: -5,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          transformOrigin: "center center",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          rotateZ: 0,
          duration:1,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
    const navbar = document.querySelector(".navbar");

    ScrollTrigger.create({
      trigger: boxRef.current,
      start: "top center",       // when the section starts to appear
      end: "bottom+=900 center",      // until it leaves the viewport
               // remove when done testing
      onToggle: (self) => {
        navbar.classList.toggle("on-bento", self.isActive);
      },
    });

  }, []);
  return (
    <div >
      <SplashCursor />
      <Navbar name="navbar fixed top-5 md:top-9 flex justify-between  items-center md:w-[1000px] px-4  py-3 rounded-3xl bg-[#0f1010]  z-10" />
      <div className="flex flex-col mt-20 px-10 justify-center  h-[50vh] md:h-[90vh] text-3xl text-[#dedede] gap-5 md:*:text-5xl  md:*:w-5xl  md:*:ms-60 *:tracking-[-0.6px] ">
        <div className="relative  h-[170px] md:h-[200px] md:mt-60">
          <h2 className="tryingany top-0">
            i&apos;m Obadh<span className="secondany">✌️</span>
          </h2>
          <p className="leading-[1.4em] anotherany">
            Web Developer | Problem Solver | Lifelong Learner
          </p>
        </div>
      </div>
      <div
        ref={boxRef}
        className="flex justify-center items-center ">
        <div className=" framer p-10 ">
          <BentoGridDemo />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center text-[#dedede] gap-15 mt-40 md:perspective-[1000px]">
        
        <div className="flex flex-col items-center justify-evenly gap-10">
         
            <div
            
              className="GroupOneBox framer flex flex-col justify-center p-10 gap-6 bg-[#1a1a1a] rounded-3xl shadow-lg"
            >
              <div className="w-[256px] h-[153px] relative">
                <Image
                  src="/7.png"
                  fill
                  className="object-cover rounded-3xl"
                  alt="anything"
                />
              </div>
              <div className="w-full">
                <h1 className="font-bold text-4xl ms-2">The Hope</h1>
              </div>
              <div className="w-full mt-10 flex flex-wrap items-center">
                <p className="w-[180px] ms-3 text-[#ffffff4d] text-xl tracking-[0.4px]">
                  Software Engineer Intern
              </p>
              <p className="text-[14px]">2024/2025</p>
              </div>
          </div>
         
        
        </div>

       
        <div className="flex flex-col items-center gap-10 mt-40">
        
            <div
           
              className="GroupTwoBox framer flex flex-col justify-center p-10 gap-6 bg-[#1a1a1a] rounded-3xl shadow-lg"
            >
              <div className="w-[256px] h-[153px] relative">
                <Image
                  src="/6.png"
                  fill
                  className="object-cover rounded-3xl"
                  alt="anything"
                />
              </div>
              <div className="w-full">
              <h1 className="font-bold text-4xl ms-2">JUST-Uni </h1>
              </div>
            <div className="w-full mt-10 flex flex-wrap items-center">
              <p className="w-[180px] ms-3 text-[#ffffff4d] text-xl tracking-[0.4px]">
                Software Engineering
              </p>
              <p className="text-[14px]">2020/2025</p>
            </div>
            </div>

         

        </div>
      </div>
      <div className="p-20 h-screen flex items-center justify-center text-[#dedede] text-6xl ">
        
        <Image
          src={"/8.webp"}
          width={120}
          height={120}
          alt="logo" />
        <a href="www.linkedin.com/in/obadh-ghodran-4434132a7" target='_blank'>
        get in touch
        </a>
      </div>
    </div>
  );
}
