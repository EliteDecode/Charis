import { Check } from "@mui/icons-material";
import React from "react";
import forward from "/public/ellipseForward.png";

const Success = () => {
  return (
    <div className="py-16 bg-gray-200 h-screen items-center justify-center">
      <div className="bg-white p-5 rounded-md w-[40%] m-auto text-center flex flex-col items-center justify-center space-y-8">
        <p>Great Choice</p>

        <div className="w-16 h-16 rounded-full border flex items-center justify-center flex-col bg-[#FFC50A]">
          <Check />
        </div>

        <p className="text-[13px] text-[#777777]">
          Our order was a success and we will keep in touch via email with more
          details. Thank you for choosing Chariz Interiors
        </p>

        <div className="flex items-center space-x-2">
          <p className="text-[12px]">Great, Thanks</p>
          <img src={forward} alt="" className="w-[15%]" />
        </div>
      </div>
    </div>
  );
};

export default Success;
