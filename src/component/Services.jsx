import React from "react";
import Img from "../assets/arrow.svg";
import elemData from "./Data";
const Services = () => {
  return (
    <>
      <div className="services flex justify-start items-center gap-10  h-[10%] lg:px-[5vw] lg:pr-[48%]">
        <h3 className="px-3 py-2 bg-[#9AE975] font-bold text-2xl ">Services</h3>
        <p className="text-xs font-medium lg:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab neque
          quidem officiis ullam libero itaque deserunt pariatur odio? Fugiat,
          quia.
        </p>
      </div>
      <div className=" container h-[90%] w-full flex flex-col justify-evenly items-center flex-wrap gap-y-6 gap-x-[4vw] pt-12 pb-20 lg:flex-row">
        {elemData.map((value, index) => (
          <div
            className={`elem w-full lg:w-2/5 ${value.position} ${value.bgColor} ${value.textColor}`}
            key={index}
          >
            <div className="flex flex-col justify-between">
              <h2 className={`text-[2rem] w-[60%]`}>{value.title}</h2>
              <h1 className="flex items-center text-[1rem] gap-[10px] cursor-pointer">
                <img src={Img} alt="img" className={value.invert} />
                <p>{value.subtitle}</p>
              </h1>
            </div>
            <div className="elemPart2 h-[80%]">
              <img src={value.image} alt="img" className="h-full" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
