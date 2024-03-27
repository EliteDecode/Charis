import { useState } from "react";

import { IoEyeSharp } from "react-icons/io5";

import logoImg from "../../public/Chariz Interiors 1.png";
import mailIcon from "/public/mail-01.png";
import lockIcon from "/public/square-lock-02.png";
import eyeBrown from "/public/view-off.png";
import { NavLink } from "react-router-dom";

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
    <div className="flex items-center justify-center">
      <div className="max-w-[1512px] w-full mx-auto">
        <div className="relative flex flex-col items-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <img
            className="absolute left-4 md:left-14 top-4 md:top-5"
            src={logoImg}
            alt=""
          />
          <div className="flex flex-col items-center w-full xl:px-56 2xl:px-72 lg:px-48 md:px-32">
            <div className="flex items-center justify-between w-full mt-40">
              <h6 className="text-[20px]">Welcome</h6>
              <NavLink to="/login">
                <p className="text-[20px] text-[#FFC50A]">Login</p>
              </NavLink>
            </div>
            <h1 className="text-[33px] mt-4 md:mt-8 lg:mt-12 flex items-center justify-start w-full">
              Create an account
            </h1>
            <form className="flex flex-col items-center gap-4 w-full max-w-md md:max-w-lg lg:max-w-xl mt-4 md:mt-8 lg:mt-12">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:flex-row md:gap-8 lg:gap-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="text-[20px] text-[#777777]"
                    >
                      Full Name
                    </label>
                    <div className="flex items-center">
                      <input
                        id="fullName"
                        className="max-w-[369px] lg:w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                        type="text"
                      />
                      <img
                        className="absolute top-11 left-3"
                        src={mailIcon}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="phoneNumber"
                      className="text-[20px] text-[#777777]"
                    >
                      Phone Number
                    </label>
                    <div className="relative max-w-[369px] w-full h-[63px] mt-1 ">
                      <input
                        id="phoneNumber"
                        className="max-w-[369px] lg:w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                        type={showPasswordPhoneNumber ? "text" : "password"}
                      />

                      <img
                        className="absolute top-4 left-3"
                        src={lockIcon}
                        alt=""
                      />
                      {showPasswordPhoneNumber ? (
                        <IoEyeSharp
                          color="#FFC50A"
                          onClick={toggleShowPhoneNumber}
                          size={25}
                          className="absolute top-5 right-3  cursor-pointer"
                        />
                      ) : (
                        <img
                          onClick={toggleShowPhoneNumber}
                          className="absolute top-5 right-3 cursor-pointer"
                          src={eyeBrown}
                          alt=""
                        />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[20px] text-[#777777]">
                      Password
                    </label>
                    <div className="relative max-w-[369px] w-full h-[63px] mt-1 ">
                      <input
                        className="max-w-[369px] lg:w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                        type={showPasswordPassword ? "text" : "password"}
                      />

                      <img
                        className="absolute top-4 left-3"
                        src={lockIcon}
                        alt=""
                      />
                      {showPasswordPassword ? (
                        <IoEyeSharp
                          color="#FFC50A"
                          onClick={toggleShowPassword}
                          size={25}
                          className="absolute top-5 right-3  cursor-pointer"
                        />
                      ) : (
                        <img
                          onClick={toggleShowPassword}
                          className="absolute top-5 right-3 cursor-pointer"
                          src={eyeBrown}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-[20px] text-[#777777]"
                    >
                      Email Address
                    </label>
                    <div className="flex items-center">
                      <input
                        id="email"
                        className="max-w-[369px] lg:w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                        type="text"
                      />
                      <img
                        className="absolute top-11 left-3"
                        src={mailIcon}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-[20px] text-[#777777]"
                    >
                      Country
                    </label>
                    <div className="relative max-w-[369px] w-full h-[63px] mt-1 ">
                      <input
                        className="max-w-[369px] lg:w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                        type="password"
                      />

                      <img
                        className="absolute top-4 left-3"
                        src={lockIcon}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-[20px] text-[#777777]"
                    >
                      Confirm Password
                    </label>
                    <div className="relative max-w-[369px] w-full h-[63px] mt-1 ">
                      <input
                        className="max-w-[369px] lg:w-[369px] w-full h-[63px] px-12 pb-1 border border-[#777777]"
                        type={showPasswordConfirmPassword ? "text" : "password"}
                      />

                      <img
                        className="absolute top-4 left-3"
                        src={lockIcon}
                        alt=""
                      />
                      {showPasswordConfirmPassword ? (
                        <IoEyeSharp
                          color="#FFC50A"
                          onClick={toggleShowConfirmPassword}
                          size={25}
                          className="absolute top-5 right-3  cursor-pointer"
                        />
                      ) : (
                        <img
                          onClick={toggleShowConfirmPassword}
                          className="absolute top-5 right-3 cursor-pointer"
                          src={eyeBrown}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="max-w-[369px] w-full h-[63px] bg-[#FFC50A] mt-5 text-[24px] font-bold">
                Sign up
              </button>
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
