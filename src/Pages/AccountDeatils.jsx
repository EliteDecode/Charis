import { useDispatch, useSelector } from "react-redux";
import cameraIcon from "/public/camera-01.png";
import buttonIcon from "/public/Group 4 (1).png";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { reset, update } from "@/features/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function AccountDeatils() {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userAuth
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      avatar: user?.avatar || "",
      name: user?.name || "",
      phone: user?.phone || "",
      country: user?.country || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (values.avatar.includes("data")) {
        setLoading(true);
        const userAvatar = new FormData();
        userAvatar.append("file", values.avatar);
        userAvatar.append("upload_preset", "bezf4kul");

        try {
          const avatarImageResponse = await axios.post(
            "https://api.cloudinary.com/v1_1/dgriiqmlx/image/upload",
            userAvatar
          );
          values.avatar = avatarImageResponse.data.secure_url;
        } catch (error) {
          setLoading(false);
        }
      }
      setLoading(false);
      dispatch(update(values));
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        onClose: () => {
          dispatch(reset());
        },
      });
    }

    if (isSuccess) {
      toast.success("You've updated your profile successfully", {
        onClose: () => {
          dispatch(reset());

          navigate("/account");
        },
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  const fileInputRef = useRef(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        formik.setFieldValue("avatar", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProductImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <h1 className="text-[24px] leading-[30.77px] font-bold ml-20 mt-5 mb-5">
        Account details
      </h1>
      <hr className="border-gray-200 border" />

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full gap-3 p-3 md:flex-row">
        <div className="w-full border border-gray-300 rounded-md shadow-md flex flex-col items-center md:max-w-[303px] h-full min-h-[380px] md:min-h-[477px]">
          <div className="bg-[#D9D9D9] w-[146px] h-[146px] rounded-full relative mt-10">
            <img
              src={formik.values.avatar}
              alt=""
              className="w-full h-full rounded-full"
            />
            <div className="w-[42px] h-[42px] rounded-full bg-[#FFC50A] flex items-center justify-center absolute right-2 top-[6.5rem]">
              <img
                src={cameraIcon}
                alt=""
                onClick={handleAddProductImageClick}
              />
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <h1 className="text-[20px] font-bold leading-[25.64px] mt-5">
            {user?.name}
          </h1>
          <p className="text-[10px] leading-[12.29px] text-[#777777]">
            {user?.email}
          </p>
          <div className="max-w-[259px] w-full h-[53px] border border-[#000000] flex items-center justify-center mt-5 text-[20px] leading-[24.8px] text-[#777777]">
            {user?.country}
          </div>
        </div>
        <div className=" w-full">
          <div className="grid grid-cols-1 gap-2 ">
            <div className="flex flex-col w-full">
              <label className="text-[#777777] text-[16px]">Fullname</label>
              <input
                className=" h-[53px] w-full border border-gray-300 rounded-md pl-3"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter First Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-[12px] text-red-300 leading-none">
                  (*) {formik.errors.name}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#777777] text-[16px]">Email</label>
              <input
                className=" h-[53px] w-full border border-gray-300 rounded-md pl-3"
                type="tel"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-[12px] text-red-300 leading-none">
                  (*) {formik.errors.email}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#777777] text-[16px]">Phone Number</label>
              <input
                className=" h-[53px] w-full border border-gray-300 rounded-md pl-3"
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter phone number"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span className="text-[12px] text-red-300 leading-none">
                  (*) {formik.errors.phone}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#777777] text-[16px]">Address</label>
              <input
                className=" h-[53px] w-full border border-gray-300 rounded-md pl-3"
                type="text"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Address"
              />
              {formik.touched.country && formik.errors.country ? (
                <span className="text-[12px] text-red-300 leading-none">
                  (*) {formik.errors.country}
                </span>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading || loading}
            className=" w-full m-auto h-[50px] b-white bg-[#FFC50A] mt-5 text-[20px] ">
            {isLoading || loading ? "Please wait..." : "Update"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AccountDeatils;
