import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "/public/slider.jpeg";
import Slider2 from "/public/slider2.png";
import Slider4 from "/public/slider4.png";

const InteriordDesignSlides = () => {
  return (
    <Box className="text-center custom-container mt-5 py-16">
      <Carousel>
        <div className="">
          <img src={Slider2} alt="" className="h-100%" />
        </div>

        <div className="">
          <img src={Slider4} alt="" className="h-100%" />
        </div>
      </Carousel>
    </Box>
  );
};

export default InteriordDesignSlides;
