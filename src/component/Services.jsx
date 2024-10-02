import React from "react";
import Img from "../assets/arrow.svg";
import elemData from "./Data";
const Services = () => {
  return (
    <>
      <div className="services flex justify-start items-center pl-[100px] pr-[48%] gap-10 h-[10%]">
        <h3 className="px-3 py-2 bg-[#9AE975] font-bold text-2xl ">Services</h3>
        <p className="text-sm font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab neque
          quidem officiis ullam libero itaque deserunt pariatur odio? Fugiat,
          quia.
        </p>
      </div>
      <div className=" container h-[90%] w-full flex justify-evenly items-center flex-wrap gap-y-6 pt-12 pb-20">
        {elemData.map((value, index) => (
          <div
            className={`elem ${value.position} ${value.bgColor} ${value.textColor}`}
            key={index}
          >
            <div className="flex flex-col justify-between">
              <h2 className={`text-[2rem] w-[60%]`}>{value.title}</h2>
              <h1 className="flex items-center text-[1rem] gap-[10px]">
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
