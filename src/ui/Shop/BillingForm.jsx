import { billingFormFields } from "@/utils";
import { billingSchema } from "@/utils/Schema";
import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import React, { useRef } from "react";

const BillingForm = ({ formik }) => {
  const { handleSubmit, handleChange, values, errors, touched } = formik;

  return (
    <Box className="mt-5">
      <form action="">
        <Grid container spacing={2}>
          {billingFormFields.map((field) => (
            <Grid item xs={12} sm={12} md={6}>
              <Box key={field.name}>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor={field.name}
                    className="text-[12px] text-[#777777]">
                    {field.label}{" "}
                    <span className="text-red-500 text-[12px]">*</span>
                  </label>
                  <input
                    autoFocus
                    type={field.type}
                    className="outline-none py-2 px-2"
                    style={{ border: "1px solid gray" }}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={handleChange}
                  />
                  {errors[field.name] && touched[field.name] && (
                    <div className="text-red-500 text-[10px]">
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </form>
    </Box>
  );
};

export default BillingForm;
