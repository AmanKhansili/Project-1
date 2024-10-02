import React from "react";

const CenterPart = () => {
  return (
    <>
      <div className="center h-[85%] flex flex-col-reverse items-center px-4 lg:h-5/6 lg:gap-20 lg:w-full lg:px-[5vw] lg:py-[4vw] lg:flex-row">
        <div className="part1 w-full h-full lg:w-[40%] ">
          <h1 className="text-3xl leading-tight font-medium lg:text-[4rem] ">
            Navigation the digital landscape for sucess
          </h1>
          <p className="mt-6 mb-4 lg:mt-11 lg:mb-6 lg:pr-[4vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe
            minima iste ea eum. Voluptatem odit cumque tempora maxime ratione
            modi laboriosam. Dolore dicta fugiat saepe doloribus porro
            voluptatum.
          </p>
          <button className=" border-solid px-7 py-4 rounded-[10px] text-white bg-black font-semibold">
            Book the consultation
          </button>
        </div>
        <div className="part2 w-3/5 h-full relative">
          <img
            src="https://resloup.studio/Hero.svg"
            alt="img"
            className="h-full absolute right-0"
          />
        </div>
      </div>
    </>
  );
};

export default CenterPart;
