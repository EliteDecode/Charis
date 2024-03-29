import { ListAlt, Money } from "@mui/icons-material";
import { Card, Grid, List } from "@mui/material";
import React, { useState } from "react";
import { CiBank } from "react-icons/ci";
import { FaCopy } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const Methods = () => {
  const [activeTab, setActiveTab] = useState("bankTransfer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("accountNumber");
      alert("Account number copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy account number!");
    }
  };

  return (
    <div className="custom-container" style={{ marginTop: "4%" }}>
      <div className="flex space-x-4 flex-wrap">
        {/* Bank Transfer Tab */}
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6} md={3}>
            <button
              className={` px-4 py-3 w-full flex space-x-2 items-center justify-center text-sm font-semibold ${
                activeTab === "bankTransfer"
                  ? "bg-[#FFC50A] text-black"
                  : "text-gray-700"
              } border border-[#777777]`}
              onClick={() => handleTabClick("bankTransfer")}>
              <CiBank style={{ fontSize: "18px" }} />{" "}
              <span className=" text-[13px]">Direct Bank Transfer</span>
            </button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            {/* Payment by Cheque Tab */}
            <button
              className={` px-4 py-3 w-full flex space-x-2 items-center justify-center text-sm font-semibold ${
                activeTab === "paymentByCheque"
                  ? "text-blue-500"
                  : "text-gray-700"
              } border border-[#777777]`}
              onClick={() => handleTabClick("paymentByCheque")}>
              <ListAlt style={{ fontSize: "18px" }} />{" "}
              <span className=" text-[13px]">Cheque Payment</span>
            </button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            {/* Payment by Cash Tab */}

            <button
              className={` px-4 py-3 w-full flex space-x-2 items-center justify-center text-sm font-semibold ${
                activeTab === "paymentByCard"
                  ? "text-blue-500"
                  : "text-gray-700"
              } border border-[#777777]`}
              onClick={() => handleTabClick("paymentByCard")}>
              <MdPayment style={{ fontSize: "18px" }} />{" "}
              <span className=" text-[13px]">Card Payment</span>
            </button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            {/* Payment on Delivery Tab */}

            <button
              className={` px-4 py-3 w-full flex space-x-2 items-center justify-center text-sm font-semibold ${
                activeTab === "paymentOnDelivery"
                  ? "text-blue-500"
                  : "text-gray-700"
              } border border-[#777777]`}
              onClick={() => handleTabClick("paymentOnDelivery")}>
              <Money style={{ fontSize: "18px" }} />{" "}
              <span className=" text-[13px]">Payment on Delivery</span>
            </button>
          </Grid>
        </Grid>
      </div>

      {/* Content Sections */}
      <div className="mt-5">
        {/* Bank Transfer Content */}
        <div className={`${activeTab === "bankTransfer" ? "block" : "hidden"}`}>
          <div className="bg-[#D9D9D9] p-5 sm:w-[40%] w-[100%] rounded-md">
            <p className="text-[11px] ">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="border mt-5 p-5 space-y-2 bg-white sm:w-[60%] w-[100%]">
            <div className="flex items-center">
              <p className="w-[30%] text-[15px]">Bank Name:</p>
              <p className="text-[15px]">Access Bank</p>
            </div>
            <div className="flex items-center">
              <p className="w-[30%] text-[15px]">Account Number:</p>
              <div className="flex items-center space-x-1">
                <p className="text-[15px]">1531874256</p>
                <button
                  className="flex items-center px-2 py-0.5 space-x-1 bg-[#FFC50A]"
                  onClick={copyToClipboard}>
                  {" "}
                  <span className="text-[9px]">copy</span>{" "}
                  <FaCopy style={{ fontSize: "9px" }} />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="w-[30%] text-[15px]">Bank Name:</p>
              <p className="text-[15px]">Chariz Interiors Ltd</p>
            </div>
            <div className="mt-5" style={{ marginTop: "5%" }}>
              <p className="text-[12px] text-[#777777]">
                Send receipt or proof of payment to{" "}
                <b>billing@charizinteriors.com</b>
                and use your order number as description
              </p>
            </div>
          </div>
        </div>

        {/* Payment by Cheque Content */}
        <div
          className={`${activeTab === "paymentByCheque" ? "block" : "hidden"}`}>
          Payment by Cheque Content
        </div>

        {/* Payment by Cash Content */}
        <div
          className={`${activeTab === "paymentByCash" ? "block" : "hidden"}`}>
          Payment by Cash Content
        </div>

        {/* Payment on Delivery Content */}
        <div
          className={`${
            activeTab === "paymentOnDelivery" ? "block" : "hidden"
          }`}>
          Payment on Delivery Content
        </div>
      </div>
    </div>
  );
};

export default Methods;
