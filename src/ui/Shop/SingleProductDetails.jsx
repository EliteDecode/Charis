import { Box, Grid } from "@mui/material";
import product from "/product.jpg";
import React from "react";
import { FavoriteOutlined, Share, Star, StarHalf } from "@mui/icons-material";
import SingleProductReview from "./SingleProductReview";
import { Link } from "react-router-dom";

const SingleProductDetails = () => {
  return (
    <Box className="custom-container" style={{ marginTop: "5%" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4} className="space-y-2">
              <img src={product} alt="" />
              <img src={product} alt="" />
              <img src={product} alt="" />
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
              <img src={product} alt="" className="h-full" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box className="relative h-full">
            <p className="font-bold text-[22px]">Ceramic Flower Vase</p>
            <Box className="flex items-center space-x-2">
              <Box className="flex items-center space-x-2">
                <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                <Star style={{ color: "#FFC50A", fontSize: "15px" }} />
                <StarHalf style={{ color: "#FFC50A", fontSize: "15px" }} />
              </Box>
              <Box>
                <p className="text-[12px] text-[#777777]">
                  {" "}
                  (1 Customer Review)
                </p>
              </Box>
            </Box>

            <p className="text-[14px] sm:w-[70%] w-full text-[#777777] mt-5">
              Chariz Interiors is a full-service design firm providing
              architecture, master planning, urban design, interior
              architecture, space planning and programming.{" "}
            </p>

            <Box className="flex flex-wrap items-center space-y-2 space-x-2 mt-5">
              <p>Quantity</p>
              <input
                type="number"
                className="outline-none py-2 px-2"
                style={{ border: "1px solid gray" }}
              />
              <Box className="border p-2">
                <FavoriteOutlined style={{ color: "red" }} />
              </Box>
              <Link to="/cart" className="sm:w-auto w-full">
                <button className="py-3 border outline-none px-10 bg-[#FFC50A] sm:w-auto w-full text-[12px] font-bold">
                  Add To cart
                </button>
              </Link>
            </Box>

            <Box className="mt-5">
              <p className="text-[14px] text-[#777777]">
                Categories: <span className="underline">Bed Room,</span>{" "}
                <span className="underline">Living Room</span>
              </p>
              <p className="text-[14px] text-[#777777]">
                Tags: <span className="underline">Classy,</span>{" "}
                <span className="underline">Elegant</span>
              </p>
            </Box>

            <Box className="mt-5 flex items-center space-x-2 sm:absolute relative bottom-0 border p-3 bg-[#FFC50A]">
              <Share style={{ fontSize: "15px", color: "#777777" }} />
              <p className="text-[14px] text-[#777777]">Share Product</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className="mt-28">
        <SingleProductReview />
      </Box>
    </Box>
  );
};

export default SingleProductDetails;
