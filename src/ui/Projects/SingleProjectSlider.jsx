import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "/public/slider.jpeg";
import Slider2 from "/public/slider2.png";
import Slider3 from "/public/slider3.png";
import Slider4 from "/public/slider4.png";
import back from "/public/ellipse.png";
import forward from "/public/ellipseForward.png";
import { Box, Grid } from "@mui/material";

const SingleProjectSlider = () => {
  return (
    <div className="custom-container ">
      <div className="text-center">
        {" "}
        <Carousel>
          <div className="">
            <img src={Slider2} alt="" className="h-100%" />
          </div>

          <div className="">
            <img src={Slider4} alt="" className="h-100%" />
          </div>
        </Carousel>
      </div>
      <div className="mt-5 sm:py-16 py-5">
        <p className="text-[25px] font-bold">Bon Hotel Residence</p>
        <p className="text-[13px] sm:w-[95%] w-[100%] text-[#777777]">
          Chariz Interiors is a full-service design firm providing architecture,
          master planning, urban design, interior architecture, space planning
          and programming. Our portfolio of completed work includes highly
          acclaimed and award-winning projects for clients around the country.{" "}
          <br />
          <br /> Chariz Interiors is a full-service design firm providing
          architecture, master planning, urban design, interior architecture,
          space planning and programming. Our portfolio of completed work
          includes highly acclaimed and award-winning projects for clients
          around the country.
        </p>
        <Grid container className="mt-5">
          <Grid item xs={12} sm={12} md={8}>
            <img src={Slider} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <img src={Slider3} alt="" className="w-full h-[100%]" />
          </Grid>
        </Grid>
      </div>

      <div className="sm:py-16 py-5">
        <p className="text-[25px] font-bold">Project Concept</p>
        <p className="text-[13px] sm:w-[95%] w-[100%] text-[#777777]">
          Chariz Interiors is a full-service design firm providing architecture,
          master planning, urban design, interior architecture, space planning
          and programming. Our portfolio of completed work includes highly
          acclaimed and award-winning projects for clients around the country.
          <br />
        </p>
        <ul className="p-5 ">
          <li
            className="text-[12px] text-[#777777]"
            style={{ listStyle: "disc" }}>
            Our team members are some of the finest professionals in the
            industry.
          </li>
          <li
            className="text-[12px] text-[#777777]"
            style={{ listStyle: "disc" }}>
            Organized to deliver the most specialized service possible and
            enriched.
          </li>
        </ul>
        <Grid container className="mt-5" spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <img src={Slider} alt="" className="w-full h-[100%]" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <img src={Slider3} alt="" className="w-full h-[100%]" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <img src={Slider4} alt="" className="w-full h-[100%]" />
          </Grid>
        </Grid>
        <p className="text-[13px] sm:w-[95%] mt-5 w-[100%] text-[#777777]">
          Chariz Interiors is a full-service design firm providing architecture,
          master planning, urban design, interior architecture, space planning
          and programming. Our portfolio of completed work includes highly
          acclaimed and award-winning projects for clients around the country.
          <br />
        </p>
      </div>

      <Box className="flex items-center justify-between border-t-2 pt-4">
        <Box className="flex items-center cursor-pointer space-x-2">
          <img src={back} alt="" className="w-[20%]" />
          <p className="text-[14px]">Previous Project</p>
        </Box>
        <Box className="flex items-center cursor-pointer space-x-2">
          <p className="text-[14px]">Next Project</p>
          <img src={forward} alt="" className="w-[20%]" />
        </Box>
      </Box>
    </div>
  );
};

export default SingleProjectSlider;
