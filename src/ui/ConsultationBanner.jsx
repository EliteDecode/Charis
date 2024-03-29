import React from "react";
import groupIcon from "/Group 4.png";

const ConsultationBanner = () => {
  return (
    <div className="consult-bg sm:py-48 py-16 space-y-8">
      <div className=" sm:w-[60%] w-[100%] m-auto text-center">
        <h1 className="sm:text-[54px] text-center text-[36px] leading-none text-white">
          Consultation
        </h1>

        <p className="mt-12 text-white sm:text-[16px]  text-[14px]">
          At the onset of our design collaboration, we convene either at your
          location or in our workspace to grasp your desires, aspirations, and
          requirements. Together, we'll explore your project's trajectory,
          exchange insights, and determine the optimal way to progress.
          Recognizing the significance of privacy, we uphold the highest
          standards of confidentiality to safeguard the interests and privacy of
          our esteemed clients and their estates.
        </p>

        <div className="flex items-center justify-center m-auto mt-12 w-[40%]">
          <div className="flex items-center sm:gap-6 gap-1 cursor-pointer">
            <p className="text-white sm:text-[16px] text-[12px] font-normal">
              View Project
            </p>
            <img
              src={groupIcon}
              alt=""
              className="cursor-pointer sm:w-[25%] w-[25%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner;
