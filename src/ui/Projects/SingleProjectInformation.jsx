import { Share } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";

const SingleProjectInformation = () => {
  const projectInfo = [
    { label: "Project Name:", value: "Bon Hotels" },
    { label: "Architect:", value: "Mr John Jummie" },
    { label: "Designer:", value: "Mr Peterson" },
    { label: "Concept:", value: "Minimalistic Designs" },
    { label: "Location:", value: "Abuja" },
    { label: "Date:", value: "1/02/2024 - 5/05/2024" },
  ];
  const projects = [
    "Bon Hotels",
    "AirBNB Projects",
    "Tech Innovations Hub",
    "Smart City Initiative",
    "E-commerce Platform Upgrade",
    "Healthcare Management System",
    "Education Portal Redesign",
    "Financial Services App",
    "AI-driven Customer Support",
    "Blockchain Integration Project",
  ];

  return (
    <div className="mt-12">
      <div className="custom-container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={9}>
            <Box className="py-12 project_info_bg sm:px-5 px-2 ">
              <Box className="sm:w-[70%] w-full m-auto">
                <p className="font-bold text-[27px] text-white border-b border-gray-50 pb-2 sm:w-[65%] w-[full]">
                  Project Information
                </p>
                <Box className="space-y-3 mt-5">
                  {projectInfo?.map((item, index) => (
                    <Box className="flex items-center">
                      <Box className="w-[35%]">
                        <p className="text-gray-100 text-[13px]">
                          {item.label}
                        </p>
                      </Box>
                      <Box>
                        <p className="text-gray-100 text-[13px]">
                          {item.value}
                        </p>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box className="flex items-center space-x-2 mt-5">
                  <Share
                    style={{ fontSize: "13px", color: "#fff" }}
                    color="#fff"
                  />{" "}
                  <p className="text-[13px] text-white">Share Project.</p>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box className="bg-white p-5">
              <p className="font-bold text-[17px] text-center border-b-2 border-gray-600 pb-3">
                Our Projects{" "}
              </p>
              <Box className="space-y-3 mt-5">
                {projects.map((project, index) => (
                  <p className="text-[13px] mt-1 text-[#777777]" key={index}>
                    {project}
                  </p>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SingleProjectInformation;
