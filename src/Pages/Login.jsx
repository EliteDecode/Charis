import { useState } from "react";

import { IoEyeSharp } from "react-icons/io5";
import mailIcon from "/public/mail-01.png";
import lockIcon from "/public/square-lock-02.png";

import backgroundImage from "../../public/The Simple Serenity of Soft Minimalism.png";
import logoImg from "../../public/Chariz Interiors 1.png";
import { Link, NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleshow = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="">
      <div className=" w-full ">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <div className="relative lg:flex hidden loginBg h-screen">
              <div className="text-white text-4xl   top-1 left-12 ">
                <Link to="/">
                  <img src={logoImg} />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="border">
            <div className=" sm:w-[60%] w-[90%] m-auto h-screen justify-center flex flex-col  items-center ">
              <div className="flex lg:hidden">
                <Link to="/">
                  <img src={logoImg} />
                </Link>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[1418pxpx] cursor-default">Welcome back</p>
                <NavLink to="/signup">
                  <p className="text-[18px] text-[#FFC50A] cursor-pointer">
                    Sign up here
                  </p>
                </NavLink>
              </div>
              <h1 className=" mt-3 text-[25px] leading-[36.83px] cursor-default text-center">
                Login to Chariz Interiors
              </h1>
              <form className=" w-full mt-16">
                <label className="text-[#777777] text-[20px]">
                  Email Address
                </label>
                <div className=" relative">
                  <input
                    className=" w-full h-[50px] px-12 pb-1 border border-[#777777]"
                    type="text"
                  />
                  <img
                    className="absolute top-3.5 left-3 w-[6%]"
                    src={mailIcon}
                    alt=""
                  />
                </div>
                <label className="text-[#777777] text-[20px]">Password</label>
                <div className=" relative">
                  <input
                    className=" w-full h-[50px] px-12 pb-1 border border-[#777777]"
                    type={showPassword ? "text" : "password"}
                  />
                  <img
                    className="absolute top-3.5 left-3 w-[6%]"
                    src={lockIcon}
                    alt=""
                  />
                  {showPassword ? (
                    <IoEyeSharp
                      color="#FFC50A"
                      onClick={toggleshow}
                      size={25}
                      className="absolute top-4 right-4 cursor-pointer w-[6%]"
                    />
                  ) : (
                    <img
                      onClick={toggleshow}
                      className="absolute top-4 right-4 cursor-pointer w-[6%]"
                      src="public\view-off.png"
                      alt=""
                    />
                  )}
                </div>
                <button className=" bg-[#FFC50A] mt-5 text-[15px] font-bold w-full p-3">
                  Login
                </button>
                <div className=" flex w-full items-center justify-center text-center mt-5 gap-1">
                  <p className="text-[14px]">Forgot password?</p>
                  <p className="text-[14px] text-[#FFC50A]">Reset here</p>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
