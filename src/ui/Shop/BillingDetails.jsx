import { Box, Grid } from "@mui/material";
import React from "react";
import product from "/product.jpg";
import product2 from "/3d-illustration-mockup-photo-frame-in-lounge-rende-2023-11-27-05-32-31-utc.png";
import product3 from "/public/Maximizing Space_ Clever Office Interior Design Solutions for Efficiency.png";
import { Delete, FavoriteOutlined } from "@mui/icons-material";
import ellipse from "/public/ellipseForward.png";
import { products } from "../../utils";
import BillingForm from "./BillingForm";
import { Link } from "react-router-dom";

const BillingDetails = () => {
  return (
    <div className="nt-12 py-16">
      <Box className="sm:w-[80%] w-[95%] m-auto ">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={7} className="space-y-4">
              <Box className="">
                <p className="text-[20px] font-bold">Billing Details</p>
                <BillingForm />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              style={{ position: "sticky", top: "150px" }}>
              <Box className="border p-3 rounded-md bg-[#F2F2F2] relative shadow-md py-3">
                <p className="my-3">Your Order</p>

                <hr style={{ border: "1px solid gray" }} />

                <div className="">
                  <div className="table-container">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left">Product</th>
                          <th className="text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.slice(0, 5).map((product, index) => (
                          <tr key={index}>
                            <td className="text-left text-[12px] text-[#777777]">
                              {product.name}
                            </td>
                            <td className="text-right text-[12px] text-[#777777]">
                              ${product.price}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-left text-[12px] font-bold">
                            Sub Total
                          </td>
                          <td className="text-right font-bold text-[12px]">
                            $
                            {products.reduce(
                              (acc, curr) => acc + curr.price,
                              0
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left text-[12px] font-bold">
                            Total
                          </td>
                          <td className="text-right font-bold text-[12px]">
                            $
                            {products.reduce(
                              (acc, curr) => acc + curr.price,
                              0
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Link to="/payments">
                  <div className="flex items-center p-2 bg-[#FFC50A] justify-between mt-5  w-[63%]">
                    <p>Place Order</p>
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

export default BillingDetails;
