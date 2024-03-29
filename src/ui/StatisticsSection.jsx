import { Grid } from "@mui/material";
import statisticsSectionImg from "/dining-room-in-a-coffee-shop-2023-11-27-05-05-18-utc 1.png";

function StatisticsSection() {
  return (
    <div className="relative py-16 stats">
      <div className="z-10 ">
        <Grid container>
          <Grid item xs={4} sm={4}>
            <div className="flex items-center flex-col">
              <h1 className="sm:text-[64px] text-[35px] text-[#FFC50A] ">60</h1>
              <p className="sm:text-[20px] text-[12px] text-[#FFC50A] leading-[24.8px]">
                Projects Completed
              </p>
            </div>
          </Grid>
          <Grid item xs={4} sm={4}>
            <div className="flex items-center flex-col">
              <h1 className="sm:text-[64px] text-[35px] text-[#FFC50A] ">
                1260
              </h1>
              <p className="sm:text-[20px] text-[12px] text-[#FFC50A] leading-[24.8px]">
                Locations
              </p>
            </div>
          </Grid>
          <Grid item xs={4} sm={4}>
            <div className="flex items-center flex-col">
              <h1 className="sm:text-[64px] text-[35px] text-[#FFC50A] ">
                260
              </h1>
              <p className="sm:text-[20px] text-[12px] text-[#FFC50A] leading-[24.8px]">
                Square Feet
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default StatisticsSection;
