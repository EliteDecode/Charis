import React from "react";
import { AboutUsContentCard } from "./AboutUsContentCard";

const ServiceBanner = () => {
  return (
    <div className="bg-service py-16">
      <div className="text-center">
        <h1 className="sm:text-[54px] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
          Our Services
        </h1>
        <p className="text-[#1E1E1E]">
          Browse through our modest list of services
        </p>
      </div>
      {/* Our Services section */}
      <div className="">
        <AboutUsContentCard />
      </div>
    </div>
  );
};

export default ServiceBanner;
