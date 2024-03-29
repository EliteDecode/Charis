import { Box } from "@mui/material";
import React from "react";

const BillingSteppers = ({ active }) => {
  return (
    <Box className="sm:w-[50%]  w-[95%] m-auto flex items-center justify-center mt-5">
      <Box className="flex w-full items-center space-x-4 border-b">
        <Box
          className={`${
            active == "details" || active == "payments"
              ? "border-b-2 border-[#FFC50A]"
              : "border-b-2 border-gray-400"
          } pb-2 w-[32%] text-center`}>
          <p className="text-[12px]">1. Billing Details</p>
        </Box>
        <Box
          className={`${
            active == "payments"
              ? "border-b-2 border-[#FFC50A]"
              : "border-b-2 border-gray-400"
          } pb-2 w-[32%] text-center`}>
          <p className="text-[12px]">2. Payment Method</p>
        </Box>
        <Box
          className={`${
            active == "checkout"
              ? "border-b-2 border-[#FFC50A]"
              : "border-b-2 border-gray-400"
          } pb-2 w-[32%] text-center`}>
          <p className="text-[12px]">3. Checkout</p>
        </Box>
      </Box>
    </Box>
  );
};

export default BillingSteppers;
