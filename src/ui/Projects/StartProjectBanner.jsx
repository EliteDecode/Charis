import React from "react";
import groupIcon from "/public/Group 4.png";
import { Box, Grid } from "@mui/material";
import forward from "/public/Group 4.png";

const StartProjectBanner = () => {
  return (
    <div className="startProject-bg sm:py-28 py-16 space-y-8 mb-10">
      <div className=" sm:w-[60%] w-[100%] m-auto text-center">
        <h1 className="sm:text-[54px] text-center text-[36px] leading-none text-white">
          Start a Project
        </h1>
      </div>
      <div className="custom-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <div
              className="border rounded-md p-5"
              style={{
                background: "#0000004D",
                backgroundBlendMode: "overlay",
              }}>
              <Box className="space-y-28">
                <Box>
                  <p className="font-bold text-[18px] text-white">
                    Speak with a consultant
                  </p>
                  <p className="text-gray-200 text-[12px]">
                    Call us for immediate assistance
                  </p>
                </Box>

                <Box className="flex items-center space-x-2">
                  <p className="font-bold text-white">Call Now</p>
                  <img src={forward} alt="" width="10%" />
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div
              className="border rounded-md p-5"
              style={{
                background: "#0000004D",
                backgroundBlendMode: "overlay",
              }}>
              <Box className="space-y-28">
                <Box>
                  <p className="font-bold text-[18px] text-white">
                    Schedule a walk-in visit
                  </p>
                  <p className="text-gray-200 text-[12px]">
                    Visit us at 4th floor, Ocean Centre, off Oladipo Diya Road,
                    Gudu, Abuja
                  </p>
                </Box>

                <Box className="flex items-center space-x-2">
                  <p className="font-bold text-white">Call Now</p>
                  <img src={forward} alt="" width="10%" />
                </Box>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div
              className="border rounded-md p-5"
              style={{
                background: "#0000004D",
                backgroundBlendMode: "overlay",
              }}>
              <Box className="space-y-28">
                <Box>
                  <p className="font-bold text-[18px] text-white">
                    Book a virtual consultation
                  </p>
                  <p className="text-gray-200 text-[12px]">
                    For convenience, schedule a virtual call by clicking on the
                    link below
                  </p>
                </Box>

                <Box className="flex items-center space-x-2">
                  <p className="font-bold text-white">Call Now</p>
                  <img src={forward} alt="" width="10%" />
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StartProjectBanner;
