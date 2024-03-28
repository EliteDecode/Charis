import { useState } from "react";

import { IoEyeSharp } from "react-icons/io5";

import logoImg from "../../public/Chariz Interiors 1.png";
import mailIcon from "/public/mail-01.png";
import lockIcon from "/public/square-lock-02.png";
import eyeBrown from "/public/view-off.png";
import { Link, NavLink } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { Phone } from "@mui/icons-material";

function Signup() {
  const [showPasswordPhoneNumber, setShowPasswordPhoneNumber] = useState(false);
  const [showPasswordPassword, setShowPasswordPassword] = useState(false);
  const [showPasswordConfirmPassword, setShowPasswordConfirmPassword] =
    useState(false);

  const toggleShowPhoneNumber = () => {
    setShowPasswordPhoneNumber((showPassword) => !showPassword);
  };

  const toggleShowPassword = () => {
    setShowPasswordPassword((showPassword) => !showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowPasswordConfirmPassword((showPassword) => !showPassword);
  };
  return (
    <div className="signupbg">
      <div className=" w-full mx-auto">
        <div className="relative py-12">
          <div className="custom-container">
            <Link to="/">
              <img className="" src={logoImg} alt="" />
            </Link>
          </div>
          <div className="sm:w-[45%] mt-5 m-auto w-[90%]">
            <div className="flex items-center justify-between w-full">
              <h6 className="text-[18px]">Welcome</h6>
              <NavLink to="/login">
                <p className="text-[18px] text-[#FFC50A]">Login</p>
              </NavLink>
            </div>
            <h1 className="text-[25px]  w-full">Create an account</h1>
            <form className="">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="text-[15px] text-[#777777]">
                      Full Name
                    </label>
                    <div className="flex items-center">
                      <input
                        id="fullName"
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#777777]"
                        type="text"
                      />
                      <img
                        className="absolute top-10.5 left-3 w-[6%]"
                        src={mailIcon}
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="phoneNumber"
                      className="text-[15px] text-[#777777]">
                      Phone Number
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        id="phoneNumber"
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#777777]"
                      />

                      <Phone
                        className="absolute top-4 left-3 w-[6%]"
                        style={{ fontSize: "18px", color: "#FFC50A" }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label className="text-[15px] text-[#777777]">
                      Password
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#777777]"
                        type={showPasswordPassword ? "text" : "password"}
                      />

                      <img
                        className="absolute top-4 left-3 w-[6%]"
                        src={lockIcon}
                        alt=""
                      />
                      {showPasswordPassword ? (
                        <IoEyeSharp
                          color="#FFC50A"
                          onClick={toggleShowPassword}
                          size={15}
                          className="absolute top-5 right-3  cursor-pointer"
                        />
                      ) : (
                        <img
                          onClick={toggleShowPassword}
                          className="absolute top-5 right-3 cursor-pointer w-[6%]"
                          src={eyeBrown}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-[15px] text-[#777777]">
                      Email Address
                    </label>
                    <div className="flex items-center">
                      <input
                        id="email"
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#777777]"
                        type="text"
                      />
                      <img
                        className="absolute top-10.5 left-3 w-[6%]"
                        src={mailIcon}
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-[15px] text-[#777777]">
                      Country
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#777777]"
                        type="password"
                      />

                      <img
                        className="absolute top-4 left-3 w-[6%]"
                        src={lockIcon}
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-[15px] text-[#777777]">
                      Confirm Password
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#777777]"
                        type={showPasswordConfirmPassword ? "text" : "password"}
                      />

                      <img
                        className="absolute top-4 left-3 w-[6%]"
                        src={lockIcon}
                        alt=""
                      />
                      {showPasswordConfirmPassword ? (
                        <IoEyeSharp
                          color="#FFC50A"
                          onClick={toggleShowConfirmPassword}
                          size={15}
                          className="absolute top-5 right-3  cursor-pointer"
                        />
                      ) : (
                        <img
                          onClick={toggleShowConfirmPassword}
                          className="absolute top-5 right-3 cursor-pointer w-[6%]"
                          src={eyeBrown}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Box className="sm:w-[60%] w-full m-auto ">
                <button className=" w-full m-auto h-[50px] b-white bg-[#FFC50A] mt-5 text-[24px] font-bold">
                  Sign up
                </button>
              </Box>
              <div className="flex items-center justify-center text-center mt-5 gap-1">
                <p className="text-[14px]">Forgot password?</p>
                <p className="text-[14px] text-[#FFC50A]">Reset here</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
