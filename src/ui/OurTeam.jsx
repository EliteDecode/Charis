import { Box, Grid } from "@mui/material";
import React from "react";
import team1 from "/team4.png";

import team4 from "/team1.png";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <div className="sm:w-[80%] w-[95%] m-auto my-5 py-16">
      <h1 className="sm:text-[54px] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
        Our Team
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <a href="/team">
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
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <a href="/team">
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
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <a href="/team">
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
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={3} className=" ">
          <a href="/team">
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
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurTeam;
