import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import { FavoriteOutlined, ShoppingBag } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleProductBanner = () => {
  const { singleProduct, isLoading } = useSelector((state) => state.products);
  return (
    <>
      <div className="singleProductBg py-16">
        <div className="text-center flex flex-col items-center justify-center">
          {" "}
          <h1 className="sm:text-[54px] text-[#fff] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            Shop
          </h1>{" "}
          <div className="mt-3">
            <Breadcrumbs aria-label="breadcrumb" className="mt-3">
              <Link
                underline="hover"
                color="white"
                to="/"
                className="text-gray-400">
                Home
              </Link>
              <Link
                underline="hover"
                color="gray-400"
                to="/shop"
                className="text-gray-400">
                Shop
              </Link>
              <Typography color="text.primary" sx={{ color: "#fff" }}>
                {singleProduct?.data?.product_name}
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="flex items-center space-x-4 mt-5">
            <Link to="/wishlist">
              <div className="flex items-center space-x-1 p-3">
                <FavoriteOutlined
                  color="#fff"
                  style={{ color: "#fafafa", fontSize: "16px" }}
                />
                <p className="text-gray-200 text-[13px]">Wishlist</p>
              </div>
            </Link>
            <Link to="/cart">
              <div className="flex items-center space-x-1 border p-3">
                <ShoppingBag
                  color="#fff"
                  style={{ color: "#fafafa", fontSize: "16px" }}
                />
                <p className="text-gray-200 text-[13px]">My Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductBanner;
