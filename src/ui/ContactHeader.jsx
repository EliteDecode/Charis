import { Grid } from "@mui/material";

function ContactHeader() {
  return (
    <div className="">
      <div className="interiorBg py-16">
        <div className="text-center">
          {" "}
          <h1 className="sm:text-[54px] text-white text-center text-[36px] leading-none sm:w-[60%] w-[100%] m-auto">
            Contact Us
          </h1>{" "}
          <p className="text-[#fff]">Send Us a Message</p>
        </div>
      </div>
      <div className="custom-container" style={{ marginTop: "10%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <div className=" bg-white border rounded-md shadow-lg flex items-start items-center flex-col gap-1 px-2 text-center py-10">
              <p
                className="text-[25px] text-[#1E1E1E] text-center"
                style={{ textAlign: "center" }}>
                Phone Number
              </p>
              <p className="text-[16px] text-[#777777]">091 521 64668</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="  bg-white border rounded-md shadow-lg  flex items-center flex-col gap-1 px-2 text-center py-10">
              <p
                className="text-[25px] text-[#1E1E1E] text-center"
                style={{ textAlign: "center" }}>
                Email Address
              </p>
              <p className="text-[16px] text-[#777777]">
                business@charizinteriors.com
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="  bg-white border rounded-md shadow-lg  items-center flex items-start flex-col gap-1 px-2 text-center py-10">
              <p
                className="text-[25px] text-[#1E1E1E] text-center"
                style={{ textAlign: "center" }}>
                Phone Number
              </p>
              <p className="text-[16px] text-[#777777]">
                4th floor, Ocean Centre,off Oladipo Diya Road, Gudu, Apo, Abuja
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ContactHeader;
