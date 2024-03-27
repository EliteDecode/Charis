import { Grid } from "@mui/material";
import groupImage from "/public/Group 4 (1).png";

function ContactForm() {
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
            <input
              className=" border-2 py-2 border-[#000000] px-5"
              type="text"
              placeholder="Name"
            />
            <input
              className=" border-2 py-2 border-[#000000] px-5"
              type="text"
              placeholder="Email"
            />
            <textarea
              className=" border-2 py-2 border-[#000000] p-5"
              type="text"
              cols="5"
              rows="5"
              placeholder="Type your message here"
            />

            <button className="flex items-center justify-between p-3 cursor-pointer mt-2 bg-[#FFC50A] w-[229.54px] h-[64.26px] ">
              <p className="text-black text-[18px] font-bold">Submit</p>
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
