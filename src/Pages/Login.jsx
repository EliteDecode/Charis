import { useEffect, useState } from "react";

import { IoEyeSharp } from "react-icons/io5";
import mailIcon from "/mail-01.png";
import lockIcon from "/square-lock-02.png";

import backgroundImage from "/The Simple Serenity of Soft Minimalism.png";
import logoImg from "/Chariz Interiors 1.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { LoginSchema } from "@/utils/Schema";
import { login, reset } from "@/features/auth/authSlice";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userAuth
  );

  const dispatch = useDispatch();
  const toggleshow = () => {
    setShowPassword((showPassword) => !showPassword);
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
      toast.success("You've Logged In Successfully", {
        onClose: () => {
          dispatch(reset());
          navigate("/account");
        },
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <div className="">
      <div className=" w-full ">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <div className="relative lg:flex hidden loginBg h-screen">
              <div className="p-5 ">
                <Link to="/" className="">
                  <img src={logoImg} className="w-[60%]" />
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
              <div className=" w-full mt-16">
                <label className="text-[#777777] text-[20px]">
                  Email Address
                </label>
                <div className=" relative">
                  <input
                    className=" w-full h-[50px] px-12 pb-1 border border-[#777777]"
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <img
                    className="absolute top-3.5 left-3 w-[6%]"
                    src={mailIcon}
                    alt=""
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-[10px] text-red-500 leading-none">
                      (*) {formik.errors.email}
                    </span>
                  ) : null}
                </div>
                <label className="text-[#777777] text-[20px]">Password</label>
                <div className=" relative">
                  <input
                    className=" w-full h-[50px] px-12 pb-1 border border-[#777777]"
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
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

                  {formik.touched.password && formik.errors.password ? (
                    <span className="text-[10px] text-red-500 leading-none">
                      (*) {formik.errors.password}
                    </span>
                  ) : null}
                </div>
                <button
                  onClick={formik.handleSubmit}
                  disabled={isLoading}
                  className=" w-full m-auto h-[50px] b-white bg-[#FFC50A] mt-5 text-[20px] ">
                  {isLoading ? "Please wait..." : "Login"}
                </button>
                <div className=" flex w-full items-center justify-center text-center mt-5 gap-1">
                  <p className="text-[14px]">Forgot password?</p>
                  <p className="text-[14px] text-[#FFC50A]">Reset here</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
