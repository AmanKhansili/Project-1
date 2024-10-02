import React, { useRef, useState } from "react";
import Open from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const tl3 = gsap.timeline();
  const ref = useRef();
  useGSAP(() => {
    tl3.to(ref.current, {
      right: 0,
      duration: 0.5,
    });
  });
  tl3.pause();
  const handleMouseEnter = () => {
    tl3.play();
  };
  const handleMouseLeave = () => {
    tl3.reverse();
  };
  return (
    <>
      <nav className="navbar flex justify-between items-center h-[15%] px-3 mb-[5vw] lg:mb-0 lg:px-[4vw] lg:h-1/6">
        <h1 className="text-[2rem] font-bold">✨WizardZ</h1>
        <div>
          <ul className="hidden lg:flex flex-row items-center justify-center gap-[3vw] text-[1.2rem] font-medium">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Use Cases</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <button className="border-solid rounded-xl p-4 ring-2">
              Request a quote
            </button>
          </ul>
        </div>
        <div className="hamburger flex lg:hidden">
          <img src={Open} alt="" onClick={handleMouseEnter} />
          <div
            className="absolute top-0 -right-full w-1/2 h-full z-10 px-[5vw] py-[5vw] bg-slate-300 flex flex-row justify-around items-start"
            ref={ref}
          >
            <ul className="font-semibold text-[5vw] text-[#434341] flex flex-col items-start relative top-[10%] gap-[2.5rem]">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Use Cases</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <button className="border-solid rounded-xl p-2 mt-2 ring-2">
                Request a quote
              </button>
            </ul>
            <img src={Close} alt="" onClick={handleMouseLeave} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
