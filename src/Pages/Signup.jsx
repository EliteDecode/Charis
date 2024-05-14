import { useEffect, useState } from "react";

import { IoEyeSharp } from "react-icons/io5";

import logoImg from "/Chariz Interiors 1.png";
import mailIcon from "/mail-01.png";
import lockIcon from "/square-lock-02.png";
import eyeBrown from "/view-off.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { useFormik } from "formik";
import { LoginSchema, RegisterSchema } from "@/utils/Schema";
import { useDispatch, useSelector } from "react-redux";
import { login, register, reset } from "@/features/auth/authSlice";
import { toast } from "react-toastify";

function Signup() {
  const [showPasswordPhoneNumber, setShowPasswordPhoneNumber] = useState(false);
  const [showPasswordPassword, setShowPasswordPassword] = useState(false);
  const [showPasswordConfirmPassword, setShowPasswordConfirmPassword] =
    useState(false);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userAuth
  );
  const dispatch = useDispatch();

  const toggleShowPhoneNumber = () => {
    setShowPasswordPhoneNumber((showPassword) => !showPassword);
  };

  const toggleShowPassword = () => {
    setShowPasswordPassword((showPassword) => !showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowPasswordConfirmPassword((showPassword) => !showPassword);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        onClose: () => {
          dispatch(reset());
        },
      });
    }

    if (isSuccess) {
      toast.success("Registration was successfull, proceed to login", {
        onClose: () => {
          dispatch(reset());
          navigate("/login");
        },
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      phone: "",
      country: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <div className="signupbg">
      <div className=" w-full mx-auto">
        <div className="relative py-12">
          <div className="custom-container">
            <Link to="/">
              <img className="sm:w-[10%] w-[40%]" src={logoImg} alt="" />
            </Link>
          </div>
          <div className="sm:w-[45%] mt-5 m-auto w-[90%]">
            <div className="flex items-center justify-between w-full">
              <h6 className="text-[18px] text-white font-bold">Welcome</h6>
              <NavLink to="/login">
                <p className="text-[18px] text-[#FFC50A]">Login</p>
              </NavLink>
            </div>
            <h1 className="text-[25px] text-gray-300 w-full">
              Create an account
            </h1>
            <div className="">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="text-[15px] text-[#fff] ">
                      Full Name
                    </label>
                    <div className="flex items-center">
                      <input
                        id="fullName"
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#fff] "
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />{" "}
                      <img
                        className="absolute top-10.5 left-3 w-[6%]"
                        src={mailIcon}
                        alt=""
                      />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <span className="text-[12px] text-red-300 leading-none">
                        (*) {formik.errors.name}
                      </span>
                    ) : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label
                      htmlFor="phoneNumber"
                      className="text-[15px] text-[#fff] ">
                      Phone Number
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        id="phoneNumber"
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#fff] "
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />{" "}
                      <Phone
                        className="absolute top-4 left-3 w-[6%]"
                        style={{ fontSize: "18px", color: "#FFC50A" }}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone ? (
                      <span className="text-[12px] text-red-300 leading-none">
                        (*) {formik.errors.phone}
                      </span>
                    ) : null}
                  </div>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label htmlFor="email" className="text-[15px] text-[#fff] ">
                      Email Address
                    </label>
                    <div className="flex items-center">
                      <input
                        id="email"
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#fff] "
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />{" "}
                      <img
                        className="absolute top-10.5 left-3 w-[6%]"
                        src={mailIcon}
                        alt=""
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <span className="text-[12px] text-red-300 leading-none">
                        (*) {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label htmlFor="email" className="text-[15px] text-[#fff] ">
                      Country
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#fff] "
                        type="text"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />{" "}
                      <img
                        className="absolute top-4 left-3 w-[6%]"
                        src={lockIcon}
                        alt=""
                      />
                    </div>
                    {formik.touched.country && formik.errors.country ? (
                      <span className="text-[12px] text-red-300 leading-none">
                        (*) {formik.errors.country}
                      </span>
                    ) : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label className="text-[15px] text-[#fff] ">Password</label>
                    <div className="relative w-full h-[50px]">
                      <input
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#fff] "
                        type={showPasswordPassword ? "text" : "password"}
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />{" "}
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
                    {formik.touched.password && formik.errors.password ? (
                      <span className="text-[12px] text-red-300 leading-none">
                        (*) {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className="relative">
                    <label htmlFor="email" className="text-[15px] text-[#fff] ">
                      Confirm Password
                    </label>
                    <div className="relative w-full h-[50px]">
                      <input
                        className=" w-full h-[50px] b-white px-12 pb-1 border border-[#fff] "
                        type={showPasswordConfirmPassword ? "text" : "password"}
                        name="password_confirmation"
                        value={formik.values.password_confirmation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />{" "}
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
                    {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation ? (
                      <span className="text-[12px] text-red-300 leading-none">
                        (*) {formik.errors.password_confirmation}
                      </span>
                    ) : null}
                  </div>
                </Grid>
              </Grid>
              <Box className="sm:w-[60%] w-full m-auto ">
                <button
                  onClick={formik.handleSubmit}
                  disabled={isLoading}
                  className=" w-full m-auto h-[50px] b-white bg-[#FFC50A] mt-5 text-[20px] ">
                  {isLoading ? "Please wait..." : " Sign up"}
                </button>
              </Box>
              <div className="flex items-center justify-center text-center mt-5 gap-1">
                <p className="text-[14px]">Forgot password?</p>
                <p className="text-[14px] text-[#FFC50A]">Reset here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
