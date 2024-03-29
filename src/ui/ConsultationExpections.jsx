import { Box, Grid } from "@mui/material";
import React from "react";
import image1 from "/expect1.png";
import image2 from "/expect2.png";
import image3 from "/expect3.png";
import image4 from "/expect4.png";

const ConsultationExpections = () => {
  return (
    <div className="py-16 custom-container space-y-6">
      <h1 className="sm:text-[54px] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
        What to expect from the Initial Design Consultation
      </h1>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3}>
            <Box className="p-3 border">
              <img src={image1} alt="" />
              <p className="text-[13px] mt-5 text-[#777777]">
                We offer up to two hours (120mins) of in-home consultation to
                assess various spaces as required. At times, a comprehensive
                walkthrough of your home proves invaluable, while on other
                occasions, focusing on a specific area is more effective.
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box className="p-3 border">
              <img src={image2} alt="" />
              <p className="text-[13px] mt-5 text-[#777777]">
                Our primary goal is to ensure that our consultation is immensely
                beneficial to you. In our session, we'll provide broad design
                guidance, discuss your vision for the refurbished space, and
                elaborate on our ensuing steps and comprehensive service
                offerings. We'll hone in on the areas that resonate most with
                you. If you have particular objectives in mind, please guide us
                so we can cater to your needs effectively
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box className="p-3 border">
              <img src={image3} alt="" />
              <p className="text-[13px] mt-5 text-[#777777]">
                Our primary goal is to ensure that our consultation is immensely
                beneficial to you. In our session, we'll provide broad design
                guidance, discuss your vision for the refurbished space, and
                elaborate on our ensuing steps and comprehensive service
                offerings. We'll hone in on the areas that resonate most with
                you. If you have particular objectives in mind, please guide us
                so we can cater to your needs effectively
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box className="p-3 border">
              <img src={image4} alt="" />
              <p className="text-[13px] mt-5 text-[#777777]">
                Post our initial DesignConsultation, we'll present you with a
                curated set of recommendations along with a detailed proposal
                for your consideration.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ConsultationExpections;
