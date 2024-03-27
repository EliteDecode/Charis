import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import VectorImage from "/public/Vector (1).png";
import { Grid } from "@mui/material";

function ContactSection() {
  return (
    <div className="bg-[#FFC50A]  py-5  " style={{}}>
      <div className="custom-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <div>
              <div className="flex items-center cursor-pointer">
                <h1 className="sm:text-[100px] text-[50px] transition-all duration-300 ">
                  Let’s Talk
                </h1>
                <img
                  className="mt-[-30px] ml-7 sm:w-[10%] w-[10%]"
                  src={VectorImage}
                  alt=""
                />
              </div>

              <div className="gap-1 space-y-2 cursor-default">
                <p className=" text-gray-600 text-[14px]">General Enquiries</p>
                <p className=" text-gray-600 text-[14px]">
                  business@lachariz.com
                </p>
              </div>
              <div className="space-y-2 cursor-default">
                <p className=" text-gray-600 text-[14px]">Office Address</p>
                <p className=" text-gray-600 text-[14px]">
                  4th Floor, Ocean Centre, off Oladipo Diya Road, Gudu, Apo,
                  Abuja.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="flex sm:items-end items-start justify-end flex-col sm:space-y-20 space-y-8 cursor-default">
              <p className=" text-gray-600 text-[14px] sm:block hidden">
                Go back to top
              </p>
              <div className="flex am:items-end items-start flex-col">
                <p className=" text-gray-600 text-[14px]">Social Media</p>
                <div className="flex items-center space-x-6 mt-3 justify-between">
                  <FaLinkedin className="cursor-pointer" size={20} />
                  <FaTwitter className="cursor-pointer" size={20} />
                  <FaInstagram className="cursor-pointer" size={20} />
                  <BsFacebook className="cursor-pointer" size={20} />
                </div>
              </div>
              <div className="flex items-end space-x-4">
                <p className=" text-gray-600 text-[14px]">
                  Terms and Conditions
                </p>
                <p className=" text-gray-600 text-[14px]">Privacy Policy</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="mt-20 text-center">
        <hr className="" />
        <p className="mt-2">All Rights Reserved La Chariz Group 2023</p>
      </div>
    </div>
  );
}

export default ContactSection;
