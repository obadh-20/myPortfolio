import React, { useEffect } from 'react'
import gsap from "gsap";
const Navbar = ({ name }) => {
  useEffect(() => {
    gsap.utils.toArray(".image").forEach((el) => {
      // Hover: rotate slightly to the left
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
         opacity:1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          transformOrigin: "center center",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          opacity: 0.25,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
  }, []);
  return (
    <div className="flex items-center justify-center ">
      <div className={name}>
        <h1 className="text-[19px] text-[#ffffff4d] tracking-[2px]">
          Obadh Ghodran
        </h1>
        <div className="flex gap-4 text-[#ffffff4d] items-center ">
          <a
            href="https://www.linkedin.com/in/obadh-ghodran-4434132a7"
            target="_blank"
          >
            <img
              src="https://framerusercontent.com/images/vbwqc7k7luxyjMDSxUCykutREUw.svg"
              alt="linkedin"
              className="w-[40px] h-[40px] image opacity-25 "
            />
          </a>
          <a href="mailto:obadhwork@gamil.com" target="_blank">
            <img
              src="https://framerusercontent.com/images/DSG6uQUUujv0hxhNpDXMLk3xJis.svg"
              alt="email"
              className="w-[50px] h-[50px] opacity-25 image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar