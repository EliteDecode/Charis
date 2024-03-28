import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "/public/hire1.jpeg";
import image2 from "/public/hire2.jpeg";
import image3 from "/public/expect3.png";
import image4 from "/public/expect4.png";

const HireOurTeam = () => {
  return (
    <div className="py-16">
      {" "}
      <div className="custom-container">
        <h1 className="sm:text-[54px] text-center text-[36px] leading-none">
          Hire Our Team
        </h1>
        <Box className="mt-10 sm:space-y-0 space-y-6 bg-white">
          <Grid container className="border">
            <Grid item xs={12} sm={12} md={8} className="p-8 space-y-8">
              <Box className="space-y-4">
                <h1
                  className="font-bold text-[19px]"
                  style={{ fontFamily: "Nexa" }}>
                  1. Initial Consultation
                </h1>
                <p className="text-[#777777] text-[12px]">
                  A one-time fee covering the initial meeting to discuss the
                  project scope, client needs, and potential design directions.
                  Let's talk through your design needs. This is our first
                  opportunity to discuss your project and learn more about each
                  other. It’s an hour-long conversation with a team member to
                  review details.
                </p>
              </Box>
              <Box className="space-y-4">
                <Box className="flex items-center space-x-2 ">
                  <p className="font-bold">Includes:</p>
                  <hr />
                </Box>
                <Grid container className="space-y-2">
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Lifestyle Questionnaire
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Proposed Scope of Work
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Walkthrough and Site Assessment if conducted on-site
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Proposed timeline
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Project Evaluation
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Letter of Agreement (optional)
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Style and Design Preferences
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Consultation Summary
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Steps of Service / Design Process
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box className="">
                <Box className="bg-[#FFC50A] py-3 text-center">
                  <h1 className="text-[20px] font-bold">Fee: N30,000</h1>
                </Box>
                <img src={image1} alt="" />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="border">
            <Grid item xs={12} sm={12} md={4}>
              <Box className="">
                <Box className="bg-[#FFC50A] py-3 text-center">
                  <h1 className="text-[20px] font-bold">Fee: N500,000</h1>
                </Box>
                <img src={image2} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className="p-8 space-y-8">
              <Box className="space-y-4">
                <Box>
                  <h1
                    className="font-bold text-[19px]"
                    style={{ fontFamily: "Nexa" }}>
                    2. Full-Service Design Consultations
                  </h1>
                  <p className="text-[10px] text-[#777777]">
                    Everything is done for you
                  </p>
                </Box>
                <p className="text-[#777777] text-[12px]">
                  Full-service design consultations offer a holistic interior
                  design experience, providing continuous support to clients
                  from the inception to the culmination of the design process.
                  This service is especially suitable for clients seeking a
                  comprehensive design transformation or those initiating a
                  project from its outset. It encompasses in-person design,
                  procurement, project management, and installation. We manage
                  the entire project, whether it's new construction, renovation,
                  or remodeling, from the initial concept to the final touches.
                  During the consultation, we collaborate closely with the
                  client to establish design preferences, budget, and project
                  objectives. A detailed design plan is crafted, inclusive of
                  floor plans, material choices, and color schemes. Furthermore,
                  we oversee the entire design progression, addressing and
                  resolving any arising issue
                </p>
                <Box>
                  <h1
                    className="font-bold text-[19px]"
                    style={{ fontFamily: "Nexa" }}>
                    Full Service Design Commitment Fee: N300,000
                  </h1>
                  <p className="text-[12px] text-[#777777]">
                    A commitment fee is a charge levied to reserve our services
                    for a specific project, signifying the client's dedication
                    to the collaboration. This fee serves as a retainer or
                    deposit, demonstrating the client's intent to utilize the
                    proposed services. Any amount paid as a commitment fee will
                    be deducted from the eventual service charge. This fee
                    assures that we will focus on the designated project
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container className="border">
            <Grid item xs={12} sm={12} md={8} className="p-8 space-y-8">
              <Box className="space-y-4">
                <Box>
                  <h1
                    className="font-bold text-[19px]"
                    style={{ fontFamily: "Nexa" }}>
                    3. Partial Service Design Consultations
                  </h1>
                  <p className="text-[10px] text-[#777777]">
                    You do some, we do some
                  </p>
                </Box>
                <p className="text-[#777777] text-[12px]">
                  In this service, we conduct property assessments, devise
                  aplan, design a mood board, establish a budget, and handleall
                  purchases, while the implementation is carried out byyou. This
                  service emphasizes the meticulous selection andorganization of
                  furnishings, fabrics, colors, textures,accessories, and other
                  decorative elements, all at anaffordable price.
                  <br />
                  <br />
                  We will able to assist with many aspects of decorating
                  thespace, including:
                </p>
                <Grid container className="space-y-2">
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Selecting paint colors
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Suggesting lighting fixtures
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Choosing flooring materials
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Providing advice on wall coverings
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Furniture arrangement layouts
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Source accessories such as rugs and pillows
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Selecting window design
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Selecting fabric patterns for upholstery pieces like sofas
                      and chairs
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Recommending artwork
                    </p>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <p className="text-[#777777] text-[12px]">
                      Offer guidance on kitchen cabinetry designs for both
                      official and residential design
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box className="">
                <Box className="bg-[#FFC50A] py-3 text-center">
                  <h1 className="text-[20px] font-bold">Fee: N250,000</h1>
                </Box>
                <img src={image2} alt="" />
              </Box>
            </Grid>
          </Grid>

          <Grid container className="border">
            <Grid item xs={12} sm={12} md={4}>
              <Box className="">
                <Box className="bg-[#FFC50A] py-3 text-center">
                  <h1 className="text-[20px] font-bold">Fee: N150,000</h1>
                </Box>
                <img src={image4} alt="" className="h-[60vh] w-full" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} className="p-8 space-y-8">
              <Box className="space-y-4">
                <Box>
                  <h1
                    className="font-bold text-[19px]"
                    style={{ fontFamily: "Nexa" }}>
                    4. E-Design Service Consultations
                  </h1>
                  <p className="text-[10px] text-[#777777]">
                    Getting it done remotely
                  </p>
                </Box>
                <p className="text-[#777777] text-[12px]">
                  This service tier is ideal for those who seek guidance but
                  prefer to handle the design execution independently.E-design
                  services are delivered without the need for a designer to
                  physically visit your space, making it accessible regardless
                  of your location. All design tasks and communications are
                  conducted virtually, allowing you to collaborate with us from
                  afar. <br />
                  <br /> Together, we'll define your vision and objectives for
                  the area. Typically, we'll devise a plan encompassing layout,
                  color schemes, and purchasing guidelines. Once you receive the
                  design blueprint, you're free to implement it at your own pace
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default HireOurTeam;
