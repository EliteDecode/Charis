import serviceImage1 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6.png";
import serviceImage2 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (1).png";
import serviceImage3 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (2).png";
import serviceImage4 from "/public/3d-room-decor-with-furniture-minimalist-beige-tones (2) 6 (3).png";
import vectorIcon from "/public/Vector.png";
import groupIcon from "/public/Group 4 (1).png";
import { Grid } from "@mui/material";

function ServicesSection() {
  return (
    <div className="sm:py-16 py-5  custom-container">
      <div className="flex sm:flex-row flex-col items-center sm:justify-between justify-center mb-10">
        <h1 className="sm:text-[54px] text-[36px] font-bold">Our Services</h1>
        <div className="flex items-center sm:gap-6 gap-1 sm:mt-0 mt-3 cursor-pointer">
          <p className="text-black sm:text-[18px] text-[13px] font-normal">
            View More
          </p>
          <img src={groupIcon} alt="" className="cursor-pointer " />
        </div>
      </div>
      <div className="cursor-pointer ">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            {/* Service 1 */}
            <div className=" h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[25px]">01</p>
                <img className="mt-[-20px]" src={vectorIcon} alt="" />
              </div>
              <h1 className="sm:text-[28px] text-[23px] w-[216px]  mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img src={serviceImage1} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Service 2 */}
            <div className=" h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[25px]">01</p>
                <img className="mt-[-20px]" src={vectorIcon} alt="" />
              </div>
              <h1 className="sm:text-[28px] text-[23px] w-[216px]  mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img src={serviceImage2} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Service 3 */}
            <div className=" h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[25px]">01</p>
                <img className="mt-[-20px]" src={vectorIcon} alt="" />
              </div>
              <h1 className="sm:text-[28px] text-[23px] w-[216px]  mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img src={serviceImage3} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Service 4 */}
            <div className=" h-[452px] bg-white p-3 ">
              <div className="flex items-center justify-between ">
                <p className="text-[25px]">01</p>
                <img className="mt-[-20px]" src={vectorIcon} alt="" />
              </div>
              <h1 className="sm:text-[28px] text-[23px] w-[216px]  mb-5 mt-5 ">
                Residential Interior Design
              </h1>
              <img src={serviceImage4} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ServicesSection;
