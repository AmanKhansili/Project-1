import { useState } from "react";
import Navbar from "./component/Navbar";
import CenterPart from "./component/CenterPart";
import Services from "./component/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./component/Footer";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from([".navbar h1", ".navbar img", ".navbar li", ".navbar button",], {
      y: -50,
      opacity: 0,
      stagger: 0.1,
    });
    tl.from([".part1 h1", ".part1 p"], {
      x: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    },"-=0.5");
    tl.from(".part1 button", {
      opacity: 0,
    });
    tl.from(
      ".part2 img",
      {
        opacity: 0,
        scale: 0,
      },
      "-=0.5" // position parameter(start 0.5sec before first animation end)
    );
    tl.to(".part2 img", {
      y: -10,
      duration: 0.5,
      yoyo: 1,
      repeat: -1,
    });
    //Services
    //create for using in any componnt
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      },
    });
    tl2.from(".services", {
      x: -300,
      opacity: 0,
    });
    tl2.from(
      ".elem.left",
      {
        x: -300,
        opacity: 0,
        duration: 1,
        stagger: 2,
      },
      "2gether"
    );
    tl2.from(
      ".elem.right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
        stagger: 2,
      },
      "2gether"
    );
  }, [tl]);
  return (
    <>
      <div className="section1 w-full h-screen relative px-[3vw] overflow-hidden">
        <Navbar />
        <CenterPart />
      </div>
      <div className="section2 w-full min-h-screen overflow-y-hidden px-[3vw]">
        <Services />
      </div>
      <div className="section3 w-full h-[10vh] bg-[#9ae975] flex items-center justify-between px-[8vw]">
        <Footer />
      </div>
    </>
  );
}

export default App;
