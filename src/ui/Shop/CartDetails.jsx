import { Box, Grid } from "@mui/material";
import React from "react";
import product from "/product.jpg";
import product2 from "/3d-illustration-mockup-photo-frame-in-lounge-rende-2023-11-27-05-32-31-utc.png";
import product3 from "/public/Maximizing Space_ Clever Office Interior Design Solutions for Efficiency.png";
import { Delete, FavoriteOutlined } from "@mui/icons-material";
import ellipse from "/public/ellipseForward.png";
import { Link } from "react-router-dom";

const CartDetails = () => {
  return (
    <div className="nt-12 py-16">
      <Box className="sm:w-[90%] w-[95%] m-auto ">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} className="space-y-4">
              <Box className="border bg-white p-3 rounded-md shadow-md">
                <Box className="flex relative h-full  space-x-4">
                  <div className="sm:w-[20%] w-[100%]">
                    <img src={product3} alt="" className="w-[100%]" />
                  </div>
                  <Box className="space-y-2">
                    <p>Flower Vase</p>
                    <p>$30</p>
                    <div>
                      <input
                        type="number"
                        value={6}
                        className="py-2 rounded-md border-[#FFC50A] outline-none px-2"
                        style={{ border: "1px solid #FFC50A" }}
                      />
                    </div>
                    <p>Sub-total: $30</p>
                    <div className="mt-5 space-x-2">
                      <button className="border px-4 py-1 rounded-md outline-none">
                        <Delete style={{ color: "red" }} />
                      </button>
                      <button className="border px-4 py-1 rounded-md outline-none">
                        <FavoriteOutlined style={{ color: "#FFC50A" }} />
                      </button>
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className="border bg-white p-3 rounded-md shadow-md">
                <Box className="flex relative h-full  space-x-4">
                  <div className="sm:w-[20%] w-[100%]">
                    <img src={product} alt="" className="w-[100%]" />
                  </div>
                  <Box className="space-y-2">
                    <p>Flower Vase</p>
                    <p>$30</p>
                    <div>
                      <input
                        type="number"
                        value={6}
                        className="py-2 rounded-md border-[#FFC50A] outline-none px-2"
                        style={{ border: "1px solid #FFC50A" }}
                      />
                    </div>
                    <p>Sub-total: $30</p>
                    <div className="mt-5 space-x-2">
                      <button className="border px-4 py-1 rounded-md outline-none">
                        <Delete style={{ color: "red" }} />
                      </button>
                      <button className="border px-4 py-1 rounded-md outline-none">
                        <FavoriteOutlined style={{ color: "#FFC50A" }} />
                      </button>
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className="border bg-white p-3 rounded-md shadow-md">
                <Box className="flex relative h-full  space-x-4">
                  <div className="sm:w-[20%] w-[100%]">
                    <img src={product2} alt="" className="w-[100%]" />
                  </div>
                  <Box className="space-y-2">
                    <p>Flower Vase</p>
                    <p>$30</p>
                    <div>
                      <input
                        type="number"
                        value={6}
                        className="py-2 rounded-md border-[#FFC50A] outline-none px-2"
                        style={{ border: "1px solid #FFC50A" }}
                      />
                    </div>
                    <p>Sub-total: $30</p>
                    <div className="mt-5 space-x-2">
                      <button className="border px-4 py-1 rounded-md outline-none">
                        <Delete style={{ color: "red" }} />
                      </button>
                      <button className="border px-4 py-1 rounded-md outline-none">
                        <FavoriteOutlined style={{ color: "#FFC50A" }} />
                      </button>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box className="border p-3 rounded-md bg-[#F2F2F2] relative shadow-md h-[40vh]">
                <p className="my-3">Cart Totals</p>

                <hr style={{ border: "1px solid gray" }} />

                <div className="flex items-center justify-between mt-3">
                  <p className="text-[12px] text-[#777777]">Subtotal</p>
                  <p className="text-[12px] text-[#777777]">$234.00</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-[12px] text-[#777777]">Total</p>
                  <p className="text-[12px] text-[#777777]">$300.00</p>
                </div>

                <Link to="/billing">
                  <div className="flex items-center p-2 bg-[#FFC50A] justify-between absolute bottom-2 w-[93%]">
                    <p>Proceed to Checkout</p>
                    <img src={ellipse} alt="" className="w-[10%]" />
                  </div>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CartDetails;
