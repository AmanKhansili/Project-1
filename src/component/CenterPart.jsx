import React from "react";

const CenterPart = () => {
  return (
    <>
      <div className="center flex w-full gap-20 px-[100px] py-[80px] h-5/6">
        <div className="part1 w-[40%] h-full">
          <h1 className="text-[4rem] font-medium leading-[1.2]">
            Navigation the digital landscape for sucess
          </h1>
          <p className="mt-11 mb-6 pr-28">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe
            minima iste ea eum. Voluptatem odit cumque tempora maxime ratione
            modi laboriosam. Dolore dicta fugiat saepe doloribus porro
            voluptatum.
          </p>
          <button className="border-solid px-7 py-4 rounded-[10px] text-white bg-black font-semibold">
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
