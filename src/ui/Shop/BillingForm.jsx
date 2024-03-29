import { Box, Grid } from "@mui/material";
import React from "react";

const BillingForm = () => {
  return (
    <Box className="mt-5">
      <form action="">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="firstname" className="text-[12px] text-[#777777]">
                Firstname <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your firstname ..."
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="lastname" className="text-[12px] text-[#777777]">
                Lastname <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your lastname ..."
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label
                htmlFor="companyName"
                className="text-[12px] text-[#777777]">
                Company name (optional)
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your company name ..."
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="country" className="text-[12px] text-[#777777]">
                Country <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your country ..."
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="address" className="text-[12px] text-[#777777]">
                Street/Address{" "}
                <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your street/address ..."
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="address" className="text-[12px] text-[#777777]">
                Town/City <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your town/city"
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="state" className="text-[12px] text-[#777777]">
                State <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your state"
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="Zip code" className="text-[12px] text-[#777777]">
                Zip Code <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your zip code"
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label
                htmlFor="Phone number"
                className="text-[12px] text-[#777777]">
                Phone <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your Phone Number"
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box className="flex flex-col space-y-1">
              <label htmlFor="Email" className="text-[12px] text-[#777777]">
                Email <span className="text-red-500 text-[12px]">*</span>
              </label>
              <input
                type="text"
                className="outline-none py-2 px-2"
                placeholder="Please enter your Email"
                style={{ border: "1px solid gray" }}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default BillingForm;
