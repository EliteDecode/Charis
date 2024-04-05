import { Box } from "@mui/material";
import React from "react";
import door from "/public/opening.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/home");
    localStorage.setItem("FirstTime", JSON.stringify("False"));
  };
  return (
    <Box className="flex h-screen flex-col justify-center items-center space-y-8">
      <Box className="mt-5 flex flex-col justify-center items-center space-y-8  ">
        <h1 className="font-bold text-[40px]">Welcome to Chariz</h1>

        <img src={door} alt="" className="sm:w-[54%] w-[70%]" />

        <a href="/home">
          <h1
            className="font-bold text-[40px] cursor-pointer"
            onClick={handleNext}>
            Enter
          </h1>
        </a>
      </Box>
    </Box>
  );
};

export default Welcome;
