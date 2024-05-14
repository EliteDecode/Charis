import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleProjectsBanner = ({ data }) => {
  return (
    <div className="projectBg py-16">
      <div className="text-center">
        {" "}
        <h1 className="sm:text-[54px] text-white text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
          {data ? data?.name : "..."}
        </h1>{" "}
        <div className="flex items-center justify-center mt-5">
          <Breadcrumbs aria-label="breadcrumb" color="#fff">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="text-gray-400">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/projects"
              className="text-gray-400">
              Projects
            </Link>
            <Typography color="text.primary" sx={{ color: "#fff" }}>
              {" "}
              {data ? data?.name : "..."}
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectsBanner;
