import React from "react";
import expImg from "/public/abt_exp.png";

const AboutUsExperience = () => {
  return (
    <div className="custom-container flex items-center flex-col text-center">
      <h1 className="sm:text-[54px] text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
        Experience the Harmony of Form and Function
      </h1>
      <img src={expImg} alt="" className="sm:w-[70%] w-[100%]" />
    </div>
  );
};

export default AboutUsExperience;
