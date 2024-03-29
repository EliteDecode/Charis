import { Grid } from "@mui/material";
import Image1 from "/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 1.png";
import Image2 from "/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 2.png";
import Image3 from "/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 3.png";
import Image4 from "/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 4.png";
import Image5 from "/modern-interior-room-with-furniture-2023-11-27-04-51-47-utc 5.png";

function ImageGallery() {
  return (
    <div className="relative py-16">
      <h1 className=" text-center sm:text-[200px] text-[120px] text-[#FFC50A1A] cursor-default">
        Chariz
      </h1>
      <Grid container className="sm:-mt-24 -mt-10">
        <Grid item sm={6} md={1}></Grid>
        <Grid item sm={6} xs={6} md={2}>
          <img className="mt-5  w-full" src={Image1} alt="" />
        </Grid>
        <Grid item sm={6} xs={6} md={2}>
          <img className="sm:mt-32 mt-28  w-full" src={Image2} alt="" />
        </Grid>
        <Grid item sm={6} xs={6} md={2}>
          <img className="sm:mt-5 -mt-36  w-full" src={Image3} alt="" />
        </Grid>
        <Grid item sm={6} xs={6} md={2}>
          <img className="sm:mt-32 mt-0  w-full" src={Image4} alt="" />
        </Grid>
        <Grid item sm={6} xs={6} md={2}>
          <img className="sm:mt-5 -mt-36  w-full" src={Image5} alt="" />
        </Grid>
        <Grid item sm={6} md={1}></Grid>
      </Grid>
    </div>
  );
}

export default ImageGallery;
