import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import ellipse from "/public/ellipseForward.png";
import { usePDF } from "react-to-pdf";

const CheckoutDetails = ({ order }) => {
  const { toPDF, targetRef } = usePDF({
    filename: `order_${order?.order_number}.pdf`,
  });
  return (
    <>
      <Box className="p-6 shadow-lg bg-gray-100 rounded-lg" ref={targetRef}>
        <Typography variant="h5" gutterBottom>
          Checkout Summary
        </Typography>
        <Box className="grid gap-2 sm:grid-cols-2 grid-cols-1 mt-10 ">
          <Box className=" border p-5 bg-white shadow-md rounded-md">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              variant="h6"
              gutterBottom>
              Order Details
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Order Number:</span>{" "}
              <span className="font-bold">{` ${order?.order_number}`}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Total Price:</span>
              <span className="font-bold">{` ${order?.total_price}`}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              <span>Order Created at:</span>{" "}
              <span className="font-bold">{` ${new Date(
                order?.date
              ).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}`}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Status:</span>{" "}
              <span className="font-bold">{` ${order?.status}`}</span>
            </Typography>
          </Box>
          <Box className=" border p-5 bg-white shadow-md rounded-md">
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              variant="h6"
              gutterBottom>
              Billing Details
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Name: </span>{" "}
              <span className="font-bold">{`${order?.billing_details?.firstname} ${order?.billing_details?.lastname}`}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Phone:</span>{" "}
              <span className="font-bold">{` ${order?.billing_details?.phone}`}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Email</span>{" "}
              <span className="font-bold">{` ${order?.billing_details?.email}`}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom: 1,
              }}>
              {" "}
              <span>Address:</span>{" "}
              <span className="font-bold">{` ${order?.billing_details?.street_address}, 
            ${order?.billing_details?.town_city}, ${order?.billing_details?.state}, ${order?.billing_details?.country}, ${order?.billing_details?.zip_code}`}</span>
            </Typography>
          </Box>
        </Box>
        <Box>
          <TableContainer component={Paper} className="mt-4 bg-white">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order?.order_items?.map((item) => (
                  <TableRow key={item?.id}>
                    <TableCell>{item?.product_name}</TableCell>
                    <TableCell>{item?.quantity}</TableCell>
                    <TableCell>{item?.price}</TableCell>
                    <TableCell>{item?.quantity * item?.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <div
        className="flex cursor-pointer items-center p-2 bg-[#FFC50A] justify-between mt-5 sm:w-[23%] w-full"
        onClick={() => {
          toPDF();
        }}>
        <p>Download Reciept</p>
        <img src={ellipse} alt="" className="w-[10%]" />
      </div>
    </>
  );
};

export default CheckoutDetails;
