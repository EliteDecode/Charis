import { Box, Grid } from "@mui/material";
import React from "react";
import { FavoriteOutlined, ShoppingBag } from "@mui/icons-material";

const SingleProductBanner = () => {
  return (
    <>
      <div className="singleProductBg py-16">
        <div className="text-center flex flex-col items-center justify-center">
          {" "}
          <h1 className="sm:text-[54px] text-[#fff] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            Shop
          </h1>{" "}
          <p className="text-[#fff] mt-2">Home / Shop / Single Bells</p>
          <div className="flex items-center space-x-4 mt-5">
            <div className="flex items-center space-x-1 p-3">
              <FavoriteOutlined
                color="#fff"
                style={{ color: "#fafafa", fontSize: "16px" }}
              />
              <p className="text-gray-200 text-[13px]">Wishlist</p>
            </div>
            <div className="flex items-center space-x-1 border p-3">
              <ShoppingBag
                color="#fff"
                style={{ color: "#fafafa", fontSize: "16px" }}
              />
              <p className="text-gray-200 text-[13px]">My Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductBanner;
