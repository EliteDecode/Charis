import { Box, Grid } from "@mui/material";
import React from "react";
import team1 from "/public/team4.png";

import team4 from "/public/team1.png";

const OurTeam = () => {
  return (
    <div className="sm:w-[80%] w-[95%] m-auto my-5 py-16">
      <h1 className="sm:text-[54px] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
        Our Team
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <Box className=" w-[100%] m-auto mt-10">
            <img src={team1} alt="" className="rounded-md" />
            <Box>
              <p className="font-semibold text-[14px] text-[#1E1E1E]">
                Olivier Johnson
              </p>
              <p className="text-[12px] -mt-1 text-[#1E1E1E]">
                Creative Director
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <Box className=" w-[100%] m-auto mt-10">
            <img src={team1} alt="" className="rounded-md" />
            <Box>
              <p className="font-semibold text-[14px] text-[#1E1E1E]">
                Olivier Johnson
              </p>
              <p className="text-[12px] -mt-1 text-[#1E1E1E]">
                Creative Director
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <Box className=" w-[100%] m-auto mt-10">
            <img src={team1} alt="" className="rounded-md" />
            <Box>
              <p className="font-semibold text-[14px] text-[#1E1E1E]">
                Olivier Johnson
              </p>
              <p className="text-[12px] -mt-1 text-[#1E1E1E]">
                Creative Director
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <Box className=" w-[100%] m-auto mt-10">
            <img src={team1} alt="" className="rounded-md" />
            <Box>
              <p className="font-semibold text-[14px] text-[#1E1E1E]">
                Olivier Johnson
              </p>
              <p className="text-[12px] -mt-1 text-[#1E1E1E]">
                Creative Director
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurTeam;
