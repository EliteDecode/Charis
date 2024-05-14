import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "/slider.jpeg";
import Slider2 from "/slider2.png";
import Slider3 from "/slider3.png";
import Slider4 from "/slider4.png";
import back from "/ellipse.png";
import forward from "/ellipseForward.png";
import { Box, Grid } from "@mui/material";
import { ImageViewer } from "react-image-viewer-dv";

const SingleProjectSlider = ({ data, images }) => {
  return (
    <div className="custom-container ">
      <div className="text-center">
        {" "}
        <Carousel className="mt-10">
          {images?.map((item, index) => {
            return (
              <div key={index} className="">
                <img src={item} alt="" className="object-contain" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="mt-5 p-5 w-full border rounded-md shadow-md">
        <p className="text-[25px] font-bold">{data?.name}</p>
        <p
          className="text-[13px] sm:w-[95%] w-[100%] text-[#777777]"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        />
      </div>

      <div className="mt-5 p-5 w-full border rounded-md shadow-md">
        <p className="text-[25px] font-bold">Project Concept</p>
        <p className="text-[13px]  sm:w-[95%] w-[100%] text-[#777777]">
          {data?.concept}
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
