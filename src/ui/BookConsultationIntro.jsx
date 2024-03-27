import InteriorDesignImage from "/public/minimalist-interior-design 1.png";
import LineImage from "/public/Line 1.png";
import Group4Image from "/public/Group 4.png";
import Group4_1Image from "/public/Group 4 (1).png";
import ArrowNextImage from "/public/Arrow (next).png";
import ArrowNext1Image from "/public/Arrow (next) (1).png";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

function BookConsultationIntro() {
  return (
    <div className="custom-container py-5 w-full">
      <Grid container>
        <Grid xs={12} sm={12} md={2}></Grid>
        <Grid item xs={12} sm={12} md={10} className="">
          {/* item 1 */}
          <div className="relative w-full bookConsultbg sm:py-24 py-12 sm:px-8 px-1">
            <div className="w-full relative "></div>
            <div className="flex items-start justify-start sm:absolute relative sm:top-16 top-0 sm:-left-48 left-0">
              <div className="bg-[#FFC50A] p-3 sm:w-[35%] w-[100%]  z-10">
                <div className=" flex flex-col sm:px-7 px-2 py-5">
                  <p className="text-[28px] font-bold">
                    How best to prep for the Initial Design Consultation and
                    maximise results
                  </p>
                  <div className="flex items-center gap-6 mt-20">
                    <p className="text-black text-[18px] font-normal">
                      Book Consultation
                    </p>
                    <img src={Group4_1Image} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inset-0 f sm:ml-[25%] ml-0">
                <div className="ml-[1rem] sm:mt-[2rem] mt-5">
                  <ul className="sm:space-y-8 space-y-2">
                    <li
                      style={{ listStyle: "disc" }}
                      className="text-white text-[16x] ">
                      Select your choice of consultation
                    </li>
                    <li
                      style={{ listStyle: "disc" }}
                      className="text-white text-[16x] ">
                      Schedule the Design Consultation
                    </li>
                    <li
                      style={{ listStyle: "disc" }}
                      className="text-white text-[16x] ">
                      Put a few questions together ahead of your appointment
                    </li>
                    <li
                      style={{ listStyle: "disc" }}
                      className="text-white text-[16x] ">
                      To help define your design style and vision for the space,
                      gather 12-24 "Inspiration Images" for review with our team
                      during the Design Consultation.
                    </li>
                    <li
                      style={{ listStyle: "disc" }}
                      className="text-white text-[16x] ">
                      Decide the level of financial investment for this project
                      before meeting with our team. If you don't know 100%,
                      that's okay - we'll help you figure it out. It's best to
                      discuss how much time, energy, and money you think you'd
                      like to invest in this project so that our team can
                      determine which design service would be best for you.
                    </li>
                    <li
                      style={{ listStyle: "disc" }}
                      className="text-white text-[16x] ">
                      Anticipate with excitement! The La Chariz Interior design
                      Team is committed to crafting and presenting a design
                      tailored to your lifestyle aspirations from inception to
                      completion. Your design visions are inching closer to
                      reality, giving us all more than enough reason to be
                      thrilled!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookConsultationIntro;
