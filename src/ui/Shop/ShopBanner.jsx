import { Box, Grid } from "@mui/material";
import React from "react";
import icon1 from "/ear-rings-01.png";
import icon2 from "/time-03.png";
import icon3 from "/pot-01.png";
import icon4 from "/chair-barber.png";
import icon5 from "/idea-01.png";
import icon6 from "/toy-train.png";
import icon7 from "/favourite.png";
import icon8 from "/shopping-cart-01.png";
import imageBackground from "/istockphoto-1191817260-612x612 1.png";

const ShopBanner = () => {
  return (
    <>
      <div className="shopBg py-16">
        <div className="text-center">
          {" "}
          <h1 className="sm:text-[54px] text-[#000] text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            Shop
          </h1>{" "}
          <Box className="custom-container" style={{ marginTop: "2%" }}>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={2}>
                <Box className="flex items-center sm:justify-center justify-normal space-x-2">
                  <img src={icon1} alt="" />
                  <p>Accessories</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box className="flex items-center sm:justify-center justify-normal space-x-2">
                  <img src={icon2} alt="" />
                  <p>Timepieces</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box className="flex items-center sm:justify-center justify-normal space-x-2">
                  <img src={icon4} alt="" />
                  <p>Furniture</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box className="flex items-center sm:justify-center justify-normal space-x-2">
                  <img src={icon5} alt="" />
                  <p>Lightening</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box className="flex items-center sm:justify-center justify-normal space-x-2">
                  <img src={icon7} alt="" />
                  <p>Wishlist</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                <Box className="flex items-center sm:justify-center justify-normal space-x-2">
                  <img src={icon8} alt="" />
                  <p>Cart</p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ShopBanner;
