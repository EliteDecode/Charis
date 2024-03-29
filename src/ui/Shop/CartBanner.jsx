import { Box, Grid } from "@mui/material";
import React from "react";
import { FavoriteOutlined, ShoppingBag } from "@mui/icons-material";

const CartBanner = ({ title }) => {
  return (
    <>
      <div className="singleProductBg py-16">
        <div className="text-center flex flex-col items-center justify-center">
          {" "}
          <h1 className="sm:text-[54px] text-[#fff] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            {title}
          </h1>{" "}
          <p className="text-[#fff] mt-2">Home / Shop / Cart</p>
        </div>
      </div>
    </>
  );
};

export default CartBanner;
