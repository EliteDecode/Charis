import InteriorDesignImage from "/minimalist-interior-design 1.png";
import LineImage from "/Line 1.png";
import Group4Image from "/Group 4.png";
import Group4_1Image from "/Group 4 (1).png";
import ArrowNextImage from "/Arrow (next).png";
import ArrowNext1Image from "/Arrow (next) (1).png";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

function TheArtOfBeautifulLiving() {
  return (
    <div className="custom-container py-5 w-full">
      <Grid container>
        <Grid item xs={12} sm={12} md={10} className="">
          {/* item 1 */}
          <div className="relative w-full herobg sm:py-40 py-12 sm:px-8 px-1">
            <div className="w-full relative "></div>
            <div>
              <div className="inset-0 f">
                <div className="ml-[1rem] sm:mt-[2rem] mt-5">
                  <h1
                    className="text-[#FFFFFF] sm:leading-none leading-normal sm:text-[70px] text-[30px] w-[70%]"
                    style={{ fontFamily: "rofane" }}>
                    The Art of Beautiful Living
                  </h1>
                  <div className="flex items-center gap-16 mt-8 mb-5">
                    <p className="text-[#FFFFFF] text-[15px] font-normal">
                      Book Consultation
                    </p>
                    <img
                      src={Group4Image}
                      alt=""
                      className="sm:w-[4%] w-[15%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end sm:absolute relative sm:top-16 top-0 sm:-right-32 right-0">
              <div className="bg-[#FFC50A] p-3 sm:w-[40%] w-[100%]  z-10">
                <div className=" flex flex-col sm:px-16 px-2 py-5">
                  <h6 className="text-[24px]">Chariz Interiors;</h6>
                  <img
                    className="w-[1px] h-[70px] ml-1"
                    src={LineImage}
                    alt=""
                  />
                  <p className="text-[24px] font-bold">
                    Dedicated to creating remarkable spaces that elevate living
                    and working experiences.
                  </p>
                  <div className="flex items-center gap-6 mt-20">
                    <p className="text-black text-[18px] font-normal">
                      View Recent Projects
                    </p>
                    <img src={Group4_1Image} alt="" className="sm:w-[15%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className="relative">
          {/* <div className="flex sm:absolute relative -bottom-6 sm:gap-16 gap-8 sm:mx-5 mx-0 sm:my-7 my-2">
            <img className="cursor-pointer" src={ArrowNextImage} alt="" />
            <img className="cursor-pointer" src={ArrowNext1Image} alt="" />
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default TheArtOfBeautifulLiving;
