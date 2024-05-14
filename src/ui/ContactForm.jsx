import { Grid } from "@mui/material";
import groupImage from "/Group 4 (1).png";
import { useFormik } from "formik";
import { LoginSchema, sendMessageSchema } from "@/utils/Schema";
import { useDispatch, useSelector } from "react-redux";
import { reset, sendMessage } from "@/features/auth/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

function ContactForm() {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userAuth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: sendMessageSchema,
    onSubmit: (values) => {
      dispatch(sendMessage(values));
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
      toast.success("Message Sent Successfully", {
        onClose: () => {
          formik.resetForm();
        },
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  return (
    <div className="sm:py-16 py-5  custom-container">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className="sm:text-left text-center">
            <h1
              className="sm:text-[68px] text-[45px] font-semibold sm:block hidden"
              style={{ lineHeight: "5rem" }}>
              Get In <br /> Touch{" "}
            </h1>
            <h1
              className="sm:text-[68px] text-[45px] font-semibold sm:hidden block"
              style={{ lineHeight: "5rem" }}>
              Get In Touch{" "}
            </h1>

            <p className="sm:text-[28px] text-[20px] sm:w-[80%] w-[95%] ">
              Building Relationships, One Conversation at a Time
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <form className="flex flex-col gap-5 mt-5">
            <div className="w-full">
              <input
                className=" border-2 w-full py-2 border-[#000000] px-5"
                type="text"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-[10px] text-red-500 leading-none">
                  (*) {formik.errors.name}
                </span>
              ) : null}
            </div>

            <div className="w-full">
              <input
                className=" border-2 w-full py-2 border-[#000000] px-5"
                type="text"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-[10px] text-red-500 leading-none">
                  (*) {formik.errors.email}
                </span>
              ) : null}
            </div>

            <div className="w-full">
              <textarea
                className=" border-2 w-full py-2 border-[#000000] p-5"
                type="text"
                cols="5"
                rows="5"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Type your message here"
              />
              {formik.touched.message && formik.errors.message ? (
                <span className="text-[10px] text-red-500 leading-none">
                  (*) {formik.errors.message}
                </span>
              ) : null}
            </div>

            <button
              className="flex items-center justify-between p-3 cursor-pointer mt-2 bg-[#FFC50A] w-[229.54px] h-[64.26px] "
              disabled={isLoading}
              onClick={formik.handleSubmit}>
              <p className="text-black text-[18px] font-bold">
                {isLoading ? "Please wait..." : "Submit"}
              </p>
              <img
                src={groupImage}
                alt="Submit Button"
                className="cursor-pointer"
              />
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactForm;
