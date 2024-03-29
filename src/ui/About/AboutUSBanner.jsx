import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "/slider.jpeg";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";
import Slider4 from "/slider4.png";
import Group4Image from "/Group 4.png";

const AboutUSBanner = () => {
  return (
    <Box>
      <Box className="custom-container ">
        <Box className="sm:w-[70%] w-[95%] m-auto py-16 text-center">
          <h1 className="sm:text-[54px] text-[36px] font-bold">About Us</h1>
          <p className="text-[#777777] sm:text-[15px] text-[14px]">
            Creating spaces that are as aesthetically pleasing as they are
            functional. Every design element serve a purpose, and every
            functional requirement is treated as an opportunity for aesthetic
            expression.
          </p>
        </Box>
        <Box className="text-center">
          <Carousel>
            <div className="">
              <img src={Slider} alt="" className="h-100%" />
            </div>
            <div className="">
              <img src={Slider2} alt="" className="h-100%" />
            </div>
            <div className="">
              <img src={Slider3} alt="" className="h-100%" />
            </div>
            <div className="">
              <img src={Slider4} alt="" className="h-100%" />
            </div>
          </Carousel>
        </Box>
        <Box className="sm:mt-20 mt-10">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className="sm:text-right text-left">
              <p className="sm:text-[30px] text-[22px] font-bold sm:w-[90%] w-[100%] m-auto">
                We have set out to bring to you The Art of Beautiful Living
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <p className="text-[#777777]">
                Chariz Interiors is dedicated to transforming spaces into
                bespoke sanctuaries that encapsulate both the essence of
                innovation and the warmth of home. Our mission is to deliver
                personalized, intelligent design solutions that embody our
                clients' aspirations, facilitate modern living, and elevate the
                human experience.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUSBanner;
