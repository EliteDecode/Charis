import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import { FavoriteOutlined, ShoppingBag } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CartBanner = ({ title }) => {
  return (
    <>
      <div className="singleProductBg py-16">
        <div className="text-center flex flex-col items-center justify-center">
          {" "}
          <h1 className="sm:text-[54px] text-[#fff] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            {title}
          </h1>{" "}
          <Breadcrumbs aria-label="breadcrumb" color="white">
            <Link underline="hover" color="inherit" to="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" to="/shop">
              Shop
            </Link>
            <Typography color="">{title}</Typography>
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
};

export default CartBanner;
