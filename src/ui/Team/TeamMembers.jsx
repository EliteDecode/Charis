import { Box, Grid } from "@mui/material";
import React from "react";
import team1 from "/team1.png";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import LivingRoomImage from "/photo1.png";
import KitchenImage from "/photo4.png";
import RoomImage from "/photo2.png";
import OfficeImage from "/photo3.png";

const TeamMembers = () => {
  return (
    <Box className="mt-5">
      <Box className="custom-container py-16 ">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5}>
              <img src={team1} alt="" className="h-full" />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Box>
                <p className="text-[25px] font-bold">Oliver Johnson</p>

                <div className="flex items-center justify-between">
                  <p className="text-[#777777] text-[17px] font-semibold ">
                    Creative Director
                  </p>
                  <hr style={{ border: "1px solid #777777", width: "70%" }} />
                </div>

                <p className="text-[14px] text-[#777777] mt-3">
                  Chariz Interiors is a full-service design firm providing
                  architecture, master planning, urban design, interior
                  architecture, space planning and programming. Our portfolio of
                  completed work includes highly acclaimed and award-winning
                  projects for clients around the country.
                </p>

                <Box className="mt-5">
                  <p className="text-[#777777] text-[17px] font-semibold ">
                    Social Accounts
                  </p>

                  <Box className="flex items-center space-x-2">
                    <Instagram style={{ fontSize: "17px", color: "#777777" }} />
                    <Facebook style={{ fontSize: "17px", color: "#777777" }} />
                    <Twitter style={{ fontSize: "17px", color: "#777777" }} />
                    <WhatsApp style={{ fontSize: "17px", color: "#777777" }} />
                  </Box>
                </Box>

                <Box className="mt-5">
                  <p className="text-[25px] font-bold">
                    Education & Qualification
                  </p>
                  <Box className="space-y-2">
                    <Box className="border p-2 text-[#777777] text-[14px] border-[#FFC50A] sm:w-[60%] w-full">
                      <p>Graduation In Architecture From YALE University</p>
                    </Box>
                    <Box className="border p-2 text-[#777777] text-[14px] border-[#FFC50A] sm:w-[60%] w-full">
                      <p>
                        Post Graduation In Architecture From YALE University
                      </p>
                    </Box>
                    <Box className="border p-2 text-[#777777] text-[14px] border-[#FFC50A] sm:w-[60%] w-full">
                      <p>Doctorate In Architecture From YALE University</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="mt-5">
            <p className="text-[15px] font-bold">More About Olivia Johnson</p>
            <p className="text-[12px] text-[#777777]">
              Chariz Interiors is a full-service design firm providing
              architecture, master planning, urban design, interior
              architecture, space planning and programming. Our portfolio of
              completed work includes highly acclaimed and award-winning
              projects for clients around the country.
            </p>
          </Box>
          <Box className="mt-5">
            <p className="text-[15px] font-bold">Latest Projects</p>
            <div className="flex sm:flex-nowrap flex-wrap gap-3 mt-10">
              <div className="flex sm:flex-nowrap flex-wrap gap-3 flex-col">
                <div className="flex sm:flex-nowrap flex-wrap gap-3">
                  <img src={LivingRoomImage} alt="" />
                  <img src={KitchenImage} alt="" />
                </div>
                <div>
                  <img src={RoomImage} alt="" />
                </div>
              </div>
              <div>
                <img src={OfficeImage} alt="" />
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMembers;
